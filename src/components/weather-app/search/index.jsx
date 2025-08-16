export default function Search(search, setSearch) {
  return (
    <div>
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
