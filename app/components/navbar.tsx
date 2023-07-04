import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-2 flex justify-around gap-4 dark:bg-slate-900 dark:text-slate-50">
      <Link href="/"> Logo</Link>
      <ul className="flex flex-1 justify-center gap-12">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <div className="flex gap-8">
            <Link href="/about"> About</Link>
            <Link href={`/products/${Math.floor(Math.random() * 10 + 1)}`}>
              Products
            </Link>
          </div>
        </li>
      </ul>
      <Link href="/login"> Login</Link>
    </nav>
  );
};

export default Navbar;
