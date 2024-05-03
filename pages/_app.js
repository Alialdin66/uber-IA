import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component,}) {
  return (
    <>
      <link rel="image" type="icon" href="public/favicon.png" />
      <Component />
    </>
  );
}

export default MyApp;
