import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Koastal Industries Pte Ltd",
      title: "Senior Process Engineer",
      img: "./assets/anh1.jpg",
      icon: "assets/twitter.png",
      desc: "Delivered 30 projects of large and medium scaled Water/ wastewater treatment plants/ industrial park.",
    },
    {
      id: 2,
      name: "SaiGon Construction Corporation",
      title: "Lead Process Engineer",
      img: "./assets/anh.jpg",
      icon: "assets/twitter.png",
      desc: "Performed technical management including evaluating bidding proposals, selecting contractors, and managing construction for the WWTP of CaiMep Industrial Zones, residential and apartment buildings.",
      featured: true,
    },
    {
      id: 3,
      name: "Club Monaco",
      title: "Sales associate",
      img: "./assets/a.jpg",
      icon: "assets/twitter.png",
      desc: "Built connections with customers to increase the retention of sales: more than 10 times super-sales recognition.",
    },
    {
      id: 4,
      name: "GAP Inc",
      title: "Lead Sales associate",
      img: "./assets/anh1.jpg",
      icon: "assets/twitter.png",
      desc: "Recommended merchandise to customers based on needs and preferences. The leader of sales associate for women's clothing",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <div className="center">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
