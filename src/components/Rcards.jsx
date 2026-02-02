function Rcards() {
  const cardData = [
    { id: 1, title: "HTML", desc: "The structure" },
    { id: 2, title: "CSS", desc: "The style" },
    { id: 3, title: "JS", desc: "The logic" }
  ];

  return (
    <div className="flex justify-center gap-4 p-4">
      {cardData.map((card) => (
        <div key={card.id} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">{card.title}</h3>
          <p className="text-gray-400">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Rcards