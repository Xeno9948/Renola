"use client";
import { useState, useEffect } from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import type { HomeQuery } from "../tina/__generated__/types";

type HomeClientProps = {
    data: HomeQuery;
    query: string;
    variables: object;
};

export default function HomeClient(props: HomeClientProps) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    // The data is now wrapped in `home` from the GraphQL response
    const home = data.home;

    const [lang, setLang] = useState<"en" | "nl">("en");

    useEffect(() => {
        const saved = localStorage.getItem("renola_lang") as "en" | "nl" | null;
        if (saved) setLang(saved);
    }, []);

    const switchLang = (l: "en" | "nl") => {
        setLang(l);
        localStorage.setItem("renola_lang", l);
    };

    // Null-safe helpers per section
    const h = (key: keyof NonNullable<typeof home.hero>) =>
        (home.hero?.[key] ?? "") as string;
    const a = (key: keyof NonNullable<typeof home.about>) =>
        (home.about?.[key] ?? "") as string;
    const f = (key: keyof NonNullable<typeof home.focus>) =>
        (home.focus?.[key] ?? "") as string;
    const sv = (key: keyof NonNullable<typeof home.services>) =>
        (home.services?.[key] ?? "") as string;
    const g = (key: keyof NonNullable<typeof home.governance>) =>
        (home.governance?.[key] ?? "") as string;
    const ft = (key: keyof NonNullable<typeof home.footer>) =>
        (home.footer?.[key] ?? "") as string;

    return (
        <div data-tina-field={tinaField(home)}>
            {/* NAV */}
            <nav className="navbar">
                <div className="container nav-container">
                    <div className="logo">
                        <a href="#home">
                            <img src="/logo.png" alt="Renola Investment Group" className="logo-img" />
                        </a>
                    </div>
                    <div className="nav-links desktop-only">
                        <a href="#about" className="nav-link">{lang === "en" ? "About Us" : "Over Ons"}</a>
                        <a href="#focus" className="nav-link">{lang === "en" ? "Our Focus" : "Onze Focus"}</a>
                        <a href="#governance" className="nav-link">Governance</a>
                    </div>
                    <div className="nav-actions">
                        <div className="lang-switcher">
                            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => switchLang("en")}>EN</button>
                            <button className={`lang-btn${lang === "nl" ? " active" : ""}`} onClick={() => switchLang("nl")}>NL</button>
                        </div>
                        <a href="#contact" className="btn btn-primary nav-btn desktop-only">
                            {lang === "en" ? "Get Started" : "Aan de slag"} <span>&#8594;</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <header className="hero" id="home" data-tina-field={tinaField(home, "hero")}>
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge" data-tina-field={tinaField(home.hero, lang === "en" ? "badge_en" : "badge_nl")}>
                            {lang === "en" ? h("badge_en") : h("badge_nl")}
                        </div>
                        <h1 className="hero-title" data-tina-field={tinaField(home.hero, lang === "en" ? "title_en" : "title_nl")}>
                            {lang === "en" ? h("title_en") : h("title_nl")}
                        </h1>
                        <p className="hero-description" data-tina-field={tinaField(home.hero, lang === "en" ? "description_en" : "description_nl")}>
                            {lang === "en" ? h("description_en") : h("description_nl")}
                        </p>
                        <div className="hero-actions">
                            <a href="#about" className="btn btn-primary" data-tina-field={tinaField(home.hero, lang === "en" ? "cta_en" : "cta_nl")}>
                                {lang === "en" ? h("cta_en") : h("cta_nl")} <span>&#8594;</span>
                            </a>
                            <div className="hero-avatars">
                                <img data-tina-field={tinaField(home.hero, "avatar1")} src={h("avatar1") || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"} alt="Team member" />
                                <img data-tina-field={tinaField(home.hero, "avatar2")} src={h("avatar2") || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"} alt="Team member" />
                                <img data-tina-field={tinaField(home.hero, "avatar3")} src={h("avatar3") || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"} alt="Team member" />
                                <span className="avatar-text">
                                    <span data-tina-field={tinaField(home.hero, lang === "en" ? "connect_en" : "connect_nl")}>
                                        {lang === "en" ? h("connect_en") : h("connect_nl")}
                                    </span>
                                    <br />
                                    <strong data-tina-field={tinaField(home.hero, lang === "en" ? "experts_en" : "experts_nl")}>
                                        {lang === "en" ? h("experts_en") : h("experts_nl")}
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="screenshot-collage">
                            <div className="collage-col col-left">
                                <img data-tina-field={tinaField(home.hero, "collage_left")} src={h("collage_left") || "/assets/screenshot_credbuddy_home.png"} alt="CredBuddy Homepage" className="collage-img" />
                            </div>
                            <div className="collage-col col-center">
                                <img data-tina-field={tinaField(home.hero, "collage_center")} src={h("collage_center") || "/assets/screenshot_credbuddy_dashboard.png"} alt="CredBuddy Dashboard" className="collage-img" />
                            </div>
                            <div className="collage-col col-right">
                                <img data-tina-field={tinaField(home.hero, "collage_right")} src={h("collage_right") || "/assets/screenshot_reviewbuddy.png"} alt="ReviewBuddy" className="collage-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* LOGO STRIP */}
            <div className="logo-strip section bg-light">
                <div className="container">
                    <p className="strip-title text-center">
                        {lang === "en" ? "— Trusted by specialists —" : "— Vertrouwd door specialisten —"}
                    </p>
                    <div className="logos-grid">
                        {["Figma", "Stripe", "Spotify", "Dropbox", "Google"].map(n => (
                            <div key={n} className="logo-item">{n}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ABOUT */}
            <section className="section about-section" id="about" data-tina-field={tinaField(home, "about")}>
                <div className="container text-center max-w-800">
                    <div className="section-badge">{lang === "en" ? "— About Us —" : "— Over Ons —"}</div>
                    <h2 className="section-title" data-tina-field={tinaField(home.about, lang === "en" ? "title_en" : "title_nl")}>
                        {lang === "en" ? a("title_en") : a("title_nl")}
                    </h2>
                    <p className="lead-text" data-tina-field={tinaField(home.about, lang === "en" ? "intro_en" : "intro_nl")}>
                        {lang === "en" ? a("intro_en") : a("intro_nl")}
                    </p>
                    <div className="stats-row mt-4">
                        <div className="stat-circle">
                            <h3>15+</h3>
                            <p data-tina-field={tinaField(home.about, lang === "en" ? "stat1_label_en" : "stat1_label_nl")}>
                                {lang === "en" ? a("stat1_label_en") : a("stat1_label_nl")}
                            </p>
                        </div>
                        <div className="stat-circle">
                            <h3>$20m</h3>
                            <p data-tina-field={tinaField(home.about, lang === "en" ? "stat2_label_en" : "stat2_label_nl")}>
                                {lang === "en" ? a("stat2_label_en") : a("stat2_label_nl")}
                            </p>
                        </div>
                        <div className="stat-circle">
                            <h3>10k</h3>
                            <p data-tina-field={tinaField(home.about, lang === "en" ? "stat3_label_en" : "stat3_label_nl")}>
                                {lang === "en" ? a("stat3_label_en") : a("stat3_label_nl")}
                            </p>
                        </div>
                        <div className="stat-circle">
                            <h3>95%</h3>
                            <p data-tina-field={tinaField(home.about, lang === "en" ? "stat4_label_en" : "stat4_label_nl")}>
                                {lang === "en" ? a("stat4_label_en") : a("stat4_label_nl")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE BREAK */}
            <section className="section pt-0">
                <div className="container">
                    <div className="rounded-image-banner">
                        <img data-tina-field={tinaField(home.about, "banner_image")} src={a("banner_image") || "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80"} alt="Team collaborating" />
                    </div>
                </div>
            </section>

            {/* FOCUS */}
            <section className="section bg-light" id="focus" data-tina-field={tinaField(home, "focus")}>
                <div className="container">
                    <div className="focus-header">
                        <div>
                            <div className="section-badge">{lang === "en" ? "— Our Focus —" : "— Onze Focus —"}</div>
                            <h2 className="section-title" data-tina-field={tinaField(home.focus, lang === "en" ? "title_en" : "title_nl")}>{lang === "en" ? f("title_en") : f("title_nl")}</h2>
                        </div>
                        <div>
                            <p className="lead-text m-0" data-tina-field={tinaField(home.focus, lang === "en" ? "intro_en" : "intro_nl")}>{lang === "en" ? f("intro_en") : f("intro_nl")}</p>
                        </div>
                    </div>
                    <div className="grid-cards mt-4">
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="card-title" data-tina-field={tinaField(home.focus, lang === "en" ? "card1_title_en" : "card1_title_nl")}>{lang === "en" ? f("card1_title_en") : f("card1_title_nl")}</h3>
                            <p className="card-text" data-tina-field={tinaField(home.focus, lang === "en" ? "card1_text_en" : "card1_text_nl")}>{lang === "en" ? f("card1_text_en") : f("card1_text_nl")}</p>
                        </div>
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="card-title" data-tina-field={tinaField(home.focus, lang === "en" ? "card2_title_en" : "card2_title_nl")}>{lang === "en" ? f("card2_title_en") : f("card2_title_nl")}</h3>
                            <p className="card-text" data-tina-field={tinaField(home.focus, lang === "en" ? "card2_text_en" : "card2_text_nl")}>{lang === "en" ? f("card2_text_en") : f("card2_text_nl")}</p>
                        </div>
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <h3 className="card-title" data-tina-field={tinaField(home.focus, lang === "en" ? "card3_title_en" : "card3_title_nl")}>{lang === "en" ? f("card3_title_en") : f("card3_title_nl")}</h3>
                            <p className="card-text" data-tina-field={tinaField(home.focus, lang === "en" ? "card3_text_en" : "card3_text_nl")}>{lang === "en" ? f("card3_text_en") : f("card3_text_nl")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section dark-section" id="services" data-tina-field={tinaField(home, "services")}>
                <div className="container text-center">
                    <div className="section-badge light">{lang === "en" ? "— Our Services —" : "— Onze Diensten —"}</div>
                    <h2 className="section-title light-text" data-tina-field={tinaField(home.services, lang === "en" ? "title_en" : "title_nl")}>{lang === "en" ? sv("title_en") : sv("title_nl")}</h2>
                    <p className="lead-text light-subtext" data-tina-field={tinaField(home.services, lang === "en" ? "sub_en" : "sub_nl")}>{lang === "en" ? sv("sub_en") : sv("sub_nl")}</p>
                    <div className="service-gallery mt-4">
                        <div className="gallery-item">
                            <img data-tina-field={tinaField(home.services, "service1_image")} src={sv("service1_image") || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"} alt="Consulting" />
                            <div className="gallery-content">
                                <h4 data-tina-field={tinaField(home.services, lang === "en" ? "service1_en" : "service1_nl")}>{lang === "en" ? sv("service1_en") : sv("service1_nl")}</h4>
                                <div className="gallery-icon"><i className="fa-solid fa-arrow-trend-up" /></div>
                            </div>
                        </div>
                        <div className="gallery-item active">
                            <div className="gallery-content top">
                                <h4 data-tina-field={tinaField(home.services, lang === "en" ? "service2_en" : "service2_nl")}>{lang === "en" ? sv("service2_en") : sv("service2_nl")}</h4>
                                <p data-tina-field={tinaField(home.services, lang === "en" ? "service2_text_en" : "service2_text_nl")}>{lang === "en" ? sv("service2_text_en") : sv("service2_text_nl")}</p>
                            </div>
                            <img data-tina-field={tinaField(home.services, "service2_image")} src={sv("service2_image") || "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80"} alt="People talking" />
                        </div>
                        <div className="gallery-item">
                            <img data-tina-field={tinaField(home.services, "service3_image")} src={sv("service3_image") || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"} alt="Management" />
                            <div className="gallery-content">
                                <h4 data-tina-field={tinaField(home.services, lang === "en" ? "service3_en" : "service3_nl")}>{lang === "en" ? sv("service3_en") : sv("service3_nl")}</h4>
                                <div className="gallery-icon"><i className="fa-solid fa-arrow-trend-up" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GOVERNANCE */}
            <section className="section governance-section bg-light" id="governance" data-tina-field={tinaField(home, "governance")}>
                <div className="container">
                    <div className="governance-layout">
                        <div className="gov-content max-w-800 text-center mx-auto">
                            <div className="section-badge">{lang === "en" ? "— Structure —" : "— Structuur —"}</div>
                            <h2 className="section-title" data-tina-field={tinaField(home.governance, lang === "en" ? "title_en" : "title_nl")}>{lang === "en" ? g("title_en") : g("title_nl")}</h2>
                            <p className="lead-text" data-tina-field={tinaField(home.governance, lang === "en" ? "text_en" : "text_nl")}>{lang === "en" ? g("text_en") : g("text_nl")}</p>
                        </div>
                        <div className="cta-banner mt-4">
                            <div className="cta-content">
                                <h3 data-tina-field={tinaField(home.governance, lang === "en" ? "cta_heading_en" : "cta_heading_nl")}>{lang === "en" ? g("cta_heading_en") : g("cta_heading_nl")}</h3>
                                <p data-tina-field={tinaField(home.governance, lang === "en" ? "cta_sub_en" : "cta_sub_nl")}>{lang === "en" ? g("cta_sub_en") : g("cta_sub_nl")}</p>
                            </div>
                            <a href="#contact" className="btn btn-outline-light" data-tina-field={tinaField(home.governance, lang === "en" ? "cta_btn_en" : "cta_btn_nl")}>
                                {lang === "en" ? g("cta_btn_en") : g("cta_btn_nl")} <span>&#8594;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer pt-5 pb-2" data-tina-field={tinaField(home, "footer")}>
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col brand-col">
                            <img src="/logo.png" alt="Renola Investment Group" className="footer-logo mb-2" />
                            <p className="footer-desc" data-tina-field={tinaField(home.footer, lang === "en" ? "desc_en" : "desc_nl")}>{lang === "en" ? ft("desc_en") : ft("desc_nl")}</p>
                        </div>
                        <div className="footer-col">
                            <h4>{lang === "en" ? "Company" : "Bedrijf"}</h4>
                            <ul>
                                <li><a href="#about">{lang === "en" ? "About Us" : "Over Ons"}</a></li>
                                <li><a href="#focus">{lang === "en" ? "Our Focus" : "Onze Focus"}</a></li>
                                <li><a href="#governance">Governance</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{lang === "en" ? "Legal" : "Juridisch"}</h4>
                            <ul>
                                <li><a href="#">{lang === "en" ? "Privacy Policy" : "Privacybeleid"}</a></li>
                                <li><a href="#">{lang === "en" ? "Terms of Service" : "Gebruiksvoorwaarden"}</a></li>
                                <li><a href="#">Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Renola Investment Group B.V.{" "}
                            {lang === "en" ? "All rights reserved." : "Alle rechten voorbehouden."}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
