import styles from "./navBar.module.css"
import Link from "next/link";

export default function navBar() {
  return (
    <main>
        <nav className={styles.clase1}>
            <button><Link href="/">Al inicio</Link></button>
            <button><Link href="/login">Loguearse</Link></button>
            <button><Link href="/registrarse">Registrarse</Link></button>
            <p>Mi navbar</p>
            <button>un boton</button>
        </nav>
    </main>

  );

}