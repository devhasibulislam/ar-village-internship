import { useState } from 'react';
import './App.css';

function App() {
  const [URL, setURL] = useState('');

  const handlePlayYTVideo = (event) => {
    event.preventDefault();

    const url = event.target.yt_url.value;
    setURL(url.replace('watch?v=', 'embed/'));

    // https://www.youtube.com/watch?v=UPNkOwabRDY

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
              <iframe
                width="100%"
                height="315"
                src={URL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
          }
        </div>
      </div>
    </section>
  );
}

export default App;
