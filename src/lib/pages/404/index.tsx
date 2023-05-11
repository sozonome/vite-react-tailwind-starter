import { Link } from 'react-router-dom';

import { Button } from '@/lib/components/ui/button';

const Page404 = () => {
  return (
    <div className="grid md:flex md:min-h-[60vh] md:items-center gap-4">
      <div className="text-center">
        <img width={400} src="/assets/404 Error-rafiki.svg" alt="404" />
        <Button variant="link" asChild>
          <a href="https://stories.freepik.com/web" className="text-xs">
            Illustration by Freepik Stories
          </a>
        </Button>
      </div>

      <div className="text-center md:text-start">
        <h1 className="text-3xl">Page not Found</h1>

        <div className="grid gap-2">
          <p>It&apos;s Okay!</p>
          <div>
            <Button asChild>
              <Link to="/">Let&apos;s Head Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
