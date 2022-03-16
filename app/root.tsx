import {  Outlet } from "remix";
import Error from '~/components/error';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      speak: any;
    }
  }
}

export default function App() {
  return (
    <speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
        <Outlet />
    </speak>
  )
}

export function ErrorBoundary({ error }: { error: any }) {
  console.error(error);
  return (
    <speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
        <Error error="internal" />
    </speak>
  )
}