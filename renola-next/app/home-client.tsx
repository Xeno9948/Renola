"use client";
import { useState, useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import type { HomeQuery } from "@/tina/__generated__/types";

type HomeClientProps = {
    data: HomeQuery;
    variables: object;
    query: string;
};

export default function HomeClient(props: HomeClientProps) {
    const { data } = useTina(props);
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
        <>
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
            <header className="hero" id="home">
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">{lang === "en" ? h("badge_en") : h("badge_nl")}</div>
                        <h1 className="hero-title">{lang === "en" ? h("title_en") : h("title_nl")}</h1>
                        <p className="hero-description">{lang === "en" ? h("description_en") : h("description_nl")}</p>
                        <div className="hero-actions">
                            <a href="#about" className="btn btn-primary">
                                {lang === "en" ? h("cta_en") : h("cta_nl")} <span>&#8594;</span>
                            </a>
                            <div className="hero-avatars">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Team member" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Team member" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Team member" />
                                <span className="avatar-text">
                                    {lang === "en" ? h("connect_en") : h("connect_nl")}<br />
                                    <strong>{lang === "en" ? h("experts_en") : h("experts_nl")}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="screenshot-collage">
                            <div className="collage-col col-left">
                                <img src="/assets/screenshot_credbuddy_home.png" alt="CredBuddy Homepage" className="collage-img" />
                            </div>
                            <div className="collage-col col-center">
                                <img src="/assets/screenshot_credbuddy_dashboard.png" alt="CredBuddy Dashboard" className="collage-img" />
                            </div>
                            <div className="collage-col col-right">
                                <img src="/assets/screenshot_reviewbuddy.png" alt="ReviewBuddy" className="collage-img" />
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
            <section className="section about-section" id="about">
                <div className="container text-center max-w-800">
                    <div className="section-badge">{lang === "en" ? "— About Us —" : "— Over Ons —"}</div>
                    <h2 className="section-title">{lang === "en" ? a("title_en") : a("title_nl")}</h2>
                    <p className="lead-text">{lang === "en" ? a("intro_en") : a("intro_nl")}</p>
                    <div className="stats-row mt-4">
                        <div className="stat-circle"><h3>15+</h3><p>{lang === "en" ? a("stat1_label_en") : a("stat1_label_nl")}</p></div>
                        <div className="stat-circle"><h3>$20m</h3><p>{lang === "en" ? a("stat2_label_en") : a("stat2_label_nl")}</p></div>
                        <div className="stat-circle"><h3>10k</h3><p>{lang === "en" ? a("stat3_label_en") : a("stat3_label_nl")}</p></div>
                        <div className="stat-circle"><h3>95%</h3><p>{lang === "en" ? a("stat4_label_en") : a("stat4_label_nl")}</p></div>
                    </div>
                </div>
            </section>

            {/* IMAGE BREAK */}
            <section className="section pt-0">
                <div className="container">
                    <div className="rounded-image-banner">
                        <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" />
                    </div>
                </div>
            </section>

            {/* FOCUS */}
            <section className="section bg-light" id="focus">
                <div className="container">
                    <div className="focus-header">
                        <div>
                            <div className="section-badge">{lang === "en" ? "— Our Focus —" : "— Onze Focus —"}</div>
                            <h2 className="section-title">{lang === "en" ? f("title_en") : f("title_nl")}</h2>
                        </div>
                        <div>
                            <p className="lead-text m-0">{lang === "en" ? f("intro_en") : f("intro_nl")}</p>
                        </div>
                    </div>
                    <div className="grid-cards mt-4">
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="card-title">{lang === "en" ? f("card1_title_en") : f("card1_title_nl")}</h3>
                            <p className="card-text">{lang === "en" ? f("card1_text_en") : f("card1_text_nl")}</p>
                        </div>
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="card-title">{lang === "en" ? f("card2_title_en") : f("card2_title_nl")}</h3>
                            <p className="card-text">{lang === "en" ? f("card2_text_en") : f("card2_text_nl")}</p>
                        </div>
                        <div className="card modern-card">
                            <div className="card-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <h3 className="card-title">{lang === "en" ? f("card3_title_en") : f("card3_title_nl")}</h3>
                            <p className="card-text">{lang === "en" ? f("card3_text_en") : f("card3_text_nl")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section dark-section" id="services">
                <div className="container text-center">
                    <div className="section-badge light">{lang === "en" ? "— Our Services —" : "— Onze Diensten —"}</div>
                    <h2 className="section-title light-text">{lang === "en" ? sv("title_en") : sv("title_nl")}</h2>
                    <p className="lead-text light-subtext">{lang === "en" ? sv("sub_en") : sv("sub_nl")}</p>
                    <div className="service-gallery mt-4">
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Consulting" />
                            <div className="gallery-content">
                                <h4>{lang === "en" ? sv("service1_en") : sv("service1_nl")}</h4>
                                <div className="gallery-icon"><i className="fa-solid fa-arrow-trend-up" /></div>
                            </div>
                        </div>
                        <div className="gallery-item active">
                            <div className="gallery-content top">
                                <h4>{lang === "en" ? sv("service2_en") : sv("service2_nl")}</h4>
                                <p>{lang === "en" ? sv("service2_text_en") : sv("service2_text_nl")}</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80" alt="People talking" />
                        </div>
                        <div className="gallery-item">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Management" />
                            <div className="gallery-content">
                                <h4>{lang === "en" ? sv("service3_en") : sv("service3_nl")}</h4>
                                <div className="gallery-icon"><i className="fa-solid fa-arrow-trend-up" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GOVERNANCE */}
            <section className="section governance-section bg-light" id="governance">
                <div className="container">
                    <div className="governance-layout">
                        <div className="gov-content max-w-800 text-center mx-auto">
                            <div className="section-badge">{lang === "en" ? "— Structure —" : "— Structuur —"}</div>
                            <h2 className="section-title">{lang === "en" ? g("title_en") : g("title_nl")}</h2>
                            <p className="lead-text">{lang === "en" ? g("text_en") : g("text_nl")}</p>
                        </div>
                        <div className="cta-banner mt-4">
                            <div className="cta-content">
                                <h3>{lang === "en" ? g("cta_heading_en") : g("cta_heading_nl")}</h3>
                                <p>{lang === "en" ? g("cta_sub_en") : g("cta_sub_nl")}</p>
                            </div>
                            <a href="#contact" className="btn btn-outline-light">
                                {lang === "en" ? g("cta_btn_en") : g("cta_btn_nl")} <span>&#8594;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer pt-5 pb-2">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col brand-col">
                            <img src="/logo.png" alt="Renola Investment Group" className="footer-logo mb-2" />
                            <p className="footer-desc">{lang === "en" ? ft("desc_en") : ft("desc_nl")}</p>
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
        </>
    );
}
