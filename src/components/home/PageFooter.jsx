const PageFooter = () => {
  const linkSections = [
    {
      header: "Explore",
      links: ["Mac", "iPad", "iPhone", "Music", "AirPods", "AirTag"],
    },
    {
      header: "Services",
      links: ["Apple Music", "Apple Arcade", "iCloud"],
    },
    {
      header: "Account",
      links: ["Manage Your Apple ID", "iCloud.com"],
    },
    {
      header: "About Apple",
      links: [
        "News Room",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
      ],
    },
  ];
  return (
    <footer className=" bg-zinc-100 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-between py-10">
        {linkSections.map((linkSection) => (
          <div className="w-max " key={linkSection.header}>
            <h4 className="pb-2.5 text-zinc-700 font-medium">
              {linkSection.header}
            </h4>
            <ul className="hidden md:flex flex-col text-zinc-500 gap-2">
              {linkSection.links.map((link) => (
                <li
                  key={link}
                  className="hover:underline decoration-zinc-500 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default PageFooter;
