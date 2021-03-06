import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>URB 31</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <br />
      <br />

        <a href="https://linktr.ee/Urb31"><h1 className="title">

        URB 31 <img src="https://d1fdloi71mui9q.cloudfront.net/BG3spdi8RNihxRPd2GiG_ZMU9R5916jdJd9K2" alt="URB 31 Logo" className="logo" />
        </h1></a>
        <p className="description">
          SOLUÇÕES URBANÍSTICAS
        </p>


<br/>
<br/>

        <p className="description">
          Site em construção...
        </p>
<br />
<br />
        <p className="description">
        <img src="https://img2.gratispng.com/20180718/vws/kisspng-email-logo-bounce-address-computer-icons-message-online-application-5b4f433eed6ac1.5937710415319212149725.jpg" className="logo" />
        <a href="mailto:contato@urb31.com" className="email"> contato@urb31.com</a><br />
        <img src="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-180x180.png" className="logo" />
        <a href="https://api.whatsapp.com/send?phone=5531992950279" className="fone"> +55 31 99295-0279</a>
        </p>

      </main>

      <footer>
        <a
          href="https://linktr.ee/Urb31git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by URB 31{' '}
          <img src="https://d1fdloi71mui9q.cloudfront.net/BG3spdi8RNihxRPd2GiG_ZMU9R5916jdJd9K2" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .email {
            color: darkBlue;
        }
        .fone {
            color: darkBlue;
            font-size: 22px;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}