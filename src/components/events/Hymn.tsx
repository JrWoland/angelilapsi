export const Hymn = () => {
  return (
    <div>
      <h1>
        Nagranie przez Wspólnotę Hymnu Związku Wyznaniowego Upadli Aniołowie.
      </h1>
      <div className=" w-full sm:w-1/2 text-center">
        <audio src="/assets/mp3/hymn.m4a" controls className="my-3"></audio>
      </div>
    </div>
  );
};
