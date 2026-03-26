import twoseater from "../img/2-seater.jpeg";
import threeseater from "../img/3-seater.jpeg";
import fourseater from "../img/4-seater.jpeg";
import hostel from "../img/hostel.jpeg";

const rooms = [
  {
    img: twoseater,
    badge: "Popular",
    title: "Double Retreat",
    roomNumber: "101",
    seats: "2-Seater",
    totalSeats: 2,
    occupied: 1,
    status: "Available",
    desc: "Ideal for two friends seeking a quiet, homely space.",
    features: ["Study Desk", "Attached Bath", "Wi-Fi"],
    price: "₹4,500",
  },
  {
    img: threeseater,
    badge: "Best Value",
    title: "Trio Suite",
    roomNumber: "102",
    seats: "3-Seater",
    totalSeats: 3,
    occupied: 3,
    status: "Full",
    desc: "Comfortable and budget-friendly for students.",
    features: ["Wardrobe", "24/7 Security", "Mess Access"],
    price: "₹3,200",
  },
  {
    img: fourseater,
    badge: "Budget Pick",
    title: "Quad Haven",
    roomNumber: "103",
    seats: "4-Seater",
    totalSeats: 4,
    occupied: 2,
    status: "Available",
    desc: "Spacious and great for group living.",
    features: ["Common Lounge", "Laundry", "CCTV"],
    price: "₹2,600",
  },
];

const amenities = [
  { icon: "🔒", label: "24/7 Security" },
  { icon: "📶", label: "High-Speed Wi-Fi" },
  { icon: "🍽️", label: "Daily Meals" },
  { icon: "🛁", label: "Hot Water" },
  { icon: "🧺", label: "Laundry" },
  { icon: "📚", label: "Study Room" },
  { icon: "🚌", label: "Transport" },
  { icon: "💡", label: "Power Backup" },
];

const stats = [
  { num: "200+", label: "Happy Residents" },
  { num: "10+", label: "Years Trusted" },
  { num: "4.9★", label: "Student Rating" },
  { num: "24/7", label: "Support" },
];

const LandingPage = () => {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="sg-nav">
        <div className="sg-logo">
          Shikha <span>Girls</span> Hostel
        </div>
        <div className="sg-nav-actions">
          <button className="sg-btn sg-btn-ghost">Login</button>
          <button className="sg-btn sg-btn-solid">Book Room</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="sg-hero">
        <img className="sg-hero-img" src={hostel} alt="Shikha Girls Hostel" />
        <div className="sg-hero-overlay" />
        <div className="sg-hero-content">
          <span className="sg-hero-tag">Girls-Only · Safe &amp; Verified</span>
          <h1 className="sg-hero-title">
            Your <em>home</em> away
            <br />
            from home.
          </h1>
          <p className="sg-hero-sub">
            A warm, secure, and student-friendly hostel built for young women
            who deserve more than just a bed.
          </p>
          <div className="sg-hero-cta">
            <button className="sg-cta-primary">Explore Rooms</button>
            <button className="sg-cta-secondary">Schedule a Visit</button>
          </div>
        </div>
        <div className="sg-scroll">
          <div className="sg-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="sg-stats">
        {stats.map((s) => (
          <div className="sg-stat" key={s.label}>
            <div className="sg-stat-num">{s.num}</div>
            <div className="sg-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── ROOMS ── */}
      <section className="sg-rooms">
        <div className="sg-section-label">Accommodations</div>
        <h2 className="sg-section-title">Choose your perfect room</h2>
        <p className="sg-section-sub">
          Every room is thoughtfully designed for safety, comfort, and that
          little touch of warmth.
        </p>

        <div className="sg-room-grid">
          {rooms.map((room) => (
            <div className="sg-room-card" key={room.title}>
              <div className="sg-room-img-wrap">
                <img src={room.img} alt={room.title} />
                <span className="sg-room-badge">{room.badge}</span>
              </div>
              <div className="sg-room-body">
                <h3 className="sg-room-title">
                  {room.title} <small>· {room.seats}</small>
                </h3>
                <p className="sg-room-desc">{room.desc}</p>
                <div className="sg-room-features">
                  {room.features.map((f) => (
                    <span className="sg-feature-pill" key={f}>
                      {f}
                    </span>
                  ))}
                </div>
                <div className="sg-room-footer">
                  <div className="sg-room-price">
                    <strong>{room.price}</strong> /month
                  </div>
                  <button className="sg-book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="sg-amenities">
        <h2 className="sg-amenities-title">Everything you need, included</h2>
        <div className="sg-amenities-grid">
          {amenities.map((a) => (
            <div className="sg-amenity" key={a.label}>
              <span className="sg-amenity-icon">{a.icon}</span>
              {a.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="sg-footer">
        © {new Date().getFullYear()} <strong>Shikha Girls Hostel</strong> · All
        rights reserved
      </footer>
    </>
  );
};

export default LandingPage;
