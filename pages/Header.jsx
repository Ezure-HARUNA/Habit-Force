import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="AppBar">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <style>{`
        .AppBar {
            background: linear-gradient(45deg, ff00a1, f6ff00);
            height: 100px;
            line-height: 100px;
            width: 100%;

        }
      `}</style>
    </div>
)

export default Header
