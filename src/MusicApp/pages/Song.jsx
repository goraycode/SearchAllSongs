import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";
let idFavoriteSongs = [];

export const Song = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const header = "3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3";
  const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`;
  const track = useFetch(url, header).data;
  if (track === null) return;
  const { title, artist, album, preview, track_position } = track;

  const handleClick = () => {
    navigate(-1);
  };

  const getFavorites = JSON.parse(localStorage.getItem("myFavoritesSong"));
  const sincronitationStorage = () => {
    localStorage.setItem("myFavoritesSong", JSON.stringify(idFavoriteSongs));
  };

  const otherComponent = getFavorites?.some(
    (idFavorites) => idFavorites === id
  );

  const saveMyFavorite = () => {
    toast("Added to your favorite songs");
    const existSong = idFavoriteSongs.some((idFavorite) => idFavorite === id);

    if (existSong) {
      const favorites = idFavoriteSongs.map((idFavorite) => {
        if (idFavorite === id) {
          return idFavorite;
        } else {
          return idFavorite;
        }
      });

      idFavoriteSongs = [...favorites];
    } else {
      idFavoriteSongs = [id, ...idFavoriteSongs];
    }
    sincronitationStorage();
  };

  const quitMyfavorite = () => {
    toast("Removed from your favorite songs");
    idFavoriteSongs = idFavoriteSongs.filter(
      (idFavorites) => idFavorites !== id
    );
    sincronitationStorage();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/*<!-- Component: Horizontal card--> */}
      <div className="my-16 animate__animated animate__fadeInDownBig flex flex-col overflow-hidden bg-white dark:bg-slate-700 rounded shadow-md text-slate-500 shadow-slate-300 dark:shadow-slate-900 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={album.cover_big}
            alt={album.title}
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={artist.picture_small}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-400"> By {artist.name}</p>
            </div>
          </header>
          <div className="card-info flex flex-col gap-2 dark:text-slate-400">
            <p>Album name: {album.title}</p>
            <p>Track position: {track_position}</p>
            <audio src={preview} controls={true}></audio>
          </div>
          <div className="flex justify-start cent items-center gap-2 py-2 dark:text-slate-400">
            {!otherComponent && (
              <>
                <label htmlFor="">Add to favorite</label>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-red-500 transition duration-300 hover:bg-red-100 hover:text-red-600 focus:bg-red-200 focus:text-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-red-300 disabled:shadow-none disabled:hover:bg-transparent"
                  onClick={saveMyFavorite}
                >
                  <span className="relative only:-mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      role="graphics-symbol"
                      aria-labelledby="title-81 desc-81"
                    >
                      <title id="title-81">Icon title</title>
                      <desc id="desc-81">
                        A more detailed description of the icon
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </span>
                </button>
              </>
            )}

            {otherComponent && (
              <>
                <label htmlFor="">Favorite</label>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-red-500 bg-red-200"
                  onClick={quitMyfavorite}
                >
                  <span className="relative only:-mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      role="graphics-symbol"
                      aria-labelledby="title-81 desc-81"
                    >
                      <title id="title-81">Icon title</title>
                      <desc id="desc-81">
                        A more detailed description of the icon
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
          <div className="mt-4 flex justify-start gap-2 p-2 pt-0">
            <button
              className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-white-500 bg-amber-500 hover:text-white focus:bg-amber-200 focus:text-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-amber-300 disabled:shadow-none disabled:hover:bg-transparent dark:text-white"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              <span>Come back</span>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
};
