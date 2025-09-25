const colorPalette = () => {
  const colors: string[] = ["pink", "yellow", "purple", "green", "blue"];

  return (
    <>
      <div className="flex gap-1">
        {colors.map((color, i) => (
          <button
            className="h-6 w-6 rounded-full border-2 border-gray-300"
            style={{ background: color }}
            key={i}
          />
        ))}
      </div> 
    </>
  );
};

export default colorPalette;
