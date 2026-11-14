import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { id: "profile", label: "PROFILE" },
  { id: "works", label: "WORKS" },
  { id: "activities", label: "ACTIVITIES" },
  { id: "contact", label: "CONTACT" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (pathname.startsWith("/works/")) {
      setCurrent("works");
      return;
    }
    setCurrent("");
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-in">
        <Link to="/" className="brand">
          MK's room
        </Link>
        <nav className="nav" aria-label="メインナビゲーション">
          {items.map((i) => (
            <Link
              key={i.id}
              to={{ pathname: "/", hash: `#${i.id}` }}
              className={current === i.id ? "is-active" : undefined}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
