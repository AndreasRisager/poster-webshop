import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div>
        <h4>Ugeplan.dk</h4>
        <p>
          ugeplan.dk
          <br />
          Egøjevej 12
          <br />
          4600 Køge
        </p>
        <p>CVR. nr. 34834245</p>
        <p>
          Presse <br />
          <a href="mailto:kontakt@ugeplan.dk" title="mailto:kontakt@ugeplan.dk" aria-describedby="a11y-external-message">
            kontakt@ugeplan.dk
          </a>
        </p>
      </div>
      <div>
        <h4>Kundeservice</h4>
        <p>
          Kontakt mig gerne på <br />
          <a href="mailto:kontakt@ugeplan.dk" title="mailto:kontakt@ugeplan.dk" aria-describedby="a11y-external-message">
            kontakt@ugeplan.dk
          </a>
        </p>
        <p>Jeg besvarer din mail indenfor 24 timer, mandag til fredag.</p>
      </div>
      <div>
        <h4>Yderligere service</h4>
      </div>
      <div>
        <h4>Nyhedsbrev</h4>
        <form>
          <label htmlFor="footer-newsletter" className="screenreader"></label>
          <input type="email" name="footer-newsletter" id="footer-newsletter" />
          <button type="submit">Tilmeld</button>
        </form>
      </div>
    </footer>
  );
}
