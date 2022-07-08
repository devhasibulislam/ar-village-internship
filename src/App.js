import { useState } from 'react';
import './App.css';
import CanvasDraw from "react-canvas-draw";

function App() {
  const [URL, setURL] = useState('');

  const handlePlayYTVideo = (event) => {
    event.preventDefault();

    const url = event.target.yt_url.value;
    setURL(url.replace('watch?v=', 'embed/'));

    event.target.reset();
  };

  return (
    <section
      id='app'
    >
      <div>
        {/* url input section */}
        <div>
          <form
            autoComplete='off'
            onSubmit={handlePlayYTVideo}
          >
            <div id='url-input-box'>
              <input
                type="text"
                name="yt_url"
                autoComplete="false"
                placeholder='Paste your youtube video link here...'
                id="yt_url"
              />
              <button
                type='submit'
                id='url-search-button'
              >
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  id='url-search-icon'
                />
              </button>
            </div>
          </form>
        </div>
        {/* placeholder for embedded video */}
        <div id='youtube-embed-placeholder'>
          {
            URL === '' || !(URL.includes('www.youtube.com'))
              ?
              <div id='embed-youtube-alert'>
                <p>
                  As you are not pasting any youtube video link so, <br /> <a href="https://www.youtube.com/" target={'_blank'} rel='noreferrer'>click</a> on this link then search any video any put that link from url <br /> Thank you 🙃
                </p>
              </div>
              :
              <div id='canvas-box'>
                <div>
                  <iframe
                    width="529"
                    height="315"
                    src={URL}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <CanvasDraw
                    style={{
                      boxShadow:
                        "0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)"
                    }}
                    canvasWidth={529}
                    canvasHeight={315}
                    enablePanAndZoom={true}
                  />
                </div>
              </div>
          }
        </div>
      </div>
    </section>
  );
}

export default App;
