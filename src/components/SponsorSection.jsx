import React, { useEffect } from 'react';

const SponsorSection = () => {
  useEffect(() => {
    // Load Twitter script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    <div className=''>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          No one should have this much power. <a href="https://twitter.com/hashtag/MTGMH3?src=hash&amp;ref_src=twsrc%5Etfw">#MTGMH3</a> <a href="https://t.co/KpXDHGuWXk">pic.twitter.com/KpXDHGuWXk</a>
        </p>
        &mdash; Magic: The Gathering (@wizards_magic) <a href="https://twitter.com/wizards_magic/status/1798761813452181945?ref_src=twsrc%5Etfw">June 6, 2024</a>
      </blockquote>
    </div>
    <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">The <a href="https://twitter.com/hashtag/MTGMH3?src=hash&amp;ref_src=twsrc%5Etfw">#MTGMH3</a>
     Streamer Event is in full swing! Let us know in the replies what stream you&#39;re watching and what your favorite
      <a href="https://twitter.com/hashtag/MTGMH3?src=hash&amp;ref_src=twsrc%5Etfw">#MTGMH3</a> card is so far. 
      <a href="https://t.co/JfzpsgtY7k">pic.twitter.com/JfzpsgtY7k</a></p>&mdash; MTG Arena (@MTG_Arena)
     <a href="https://twitter.com/MTG_Arena/status/1798428133848211614?ref_src=twsrc%5Etfw">June 5, 2024</a>
     </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

     
     <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Six remastered Dungeons &amp; Dragons adventures from first edition, Quests from the Infinite Staircase releases on July 16.<br></br>Rediscover each adventure and claim one for FREE with your <a href="https://twitter.com/DnDBeyond?ref_src=twsrc%5Etfw">@DnDBeyond</a> account: <a href="https://t.co/cBlfgohF0l">https://t.co/cBlfgohF0l</a> <a href="https://t.co/gEgQGCqRNm">pic.twitter.com/gEgQGCqRNm</a>
     </p>&mdash; Dungeons &amp; Dragons (@Wizards_DnD) <a href="https://twitter.com/Wizards_DnD/status/1795523056682557578?ref_src=twsrc%5Etfw">May 28, 2024</a>
     </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

     </div>
  );
};

export default SponsorSection;
