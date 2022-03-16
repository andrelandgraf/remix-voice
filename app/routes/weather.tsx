import type { LoaderFunction } from 'remix';
import { useLoaderData, useCatch } from 'remix';
import Error from '~/components/error';

type LoaderData = {
    forecast?: string;
};

export const loader: LoaderFunction = ({ request }): LoaderData => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    if(searchParams.has('error')) {
        throw new Response(JSON.stringify({ error: searchParams.get('error') === "timeout" ? "timeout" : "internal" }), {
            status: 500,
        });
    }
    const forecast = ["sunny", "cloudy", "rainy", "snowy"][Math.floor(Math.random() * 4)];
    return { forecast };
}

export default function WeatherForecast() {
    const { forecast } = useLoaderData();
    return `Today's weather forecast is ${forecast}.`;
}

export function CatchBoundary() {
    const caught = useCatch();
    const caughtData = JSON.parse(caught.data);
    return <Error error={caughtData?.error || "internal"} />;
  }

  