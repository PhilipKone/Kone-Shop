export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-ecosystem">
          <a href="https://www.koneacademy.io">Kone Academy Home</a>
          <a href="https://code.koneacademy.io">Kone Code</a>
          <a href="https://lab.koneacademy.io">Kone Lab</a>
          <a href="https://ai.koneacademy.io">Kone AI</a>
          <a href="https://consult.koneacademy.io">Kone Consult</a>
          <a href="https://farms.koneacademy.io">Kone Farms</a>
          <a href="https://kids.koneacademy.io">Kone Kids</a>
          <a href="https://shop.koneacademy.io">Kone Shop</a>
          <a href="https://warp.koneacademy.io">Kone Warp</a>
          <a href="https://digital.koneacademy.io">Kone Digital</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Kone Shop. Equipping the future.</p>
      </div>
    </footer>
  );
}
