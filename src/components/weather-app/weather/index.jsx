import Search from "../search";

export default function Weather() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Search />
      Weather
    </div>
  );
}
