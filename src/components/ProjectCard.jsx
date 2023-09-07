export const ProjectCard = ({ img, desc, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={img}
      alt="double_quotes"
      className="w-[300px] h-[300px] object-contain hover:animate-pulse"
    />
    <h3
      style={{
        color: "white",
        fontWeight: 500,
        fontSize: "16pt",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {title}
    </h3>

    <h5
      style={{
        color: "white",
        fontWeight: 500,
        fontSize: "10pt",
        textAlign: "center",
      }}
    >
      {desc}
    </h5>
  </div>
);
