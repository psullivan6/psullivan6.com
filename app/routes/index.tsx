import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <h1>Hey, welcome to psullivan6.com</h1>
      <ul>
        <li>
          <Link to="/todos">TODOs</Link>
        </li>
      </ul>
    </div>
  );
}
