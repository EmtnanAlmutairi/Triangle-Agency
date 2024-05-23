import { Link, button as buttonStyles } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen bg-cover bg-center bg-[url('../public/Bg.svg')]">   
    <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Triangle Agency &nbsp;</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            We transform innovative marketing strategies into powerful results. Our dedicated team works tirelessly to empower clients worldwide, transcending boundaries and inspiring audiences with creativity and strategic insights. We are committed to being the catalyst for your success, delivering unmatched creativity, strategic direction, and measurable ROI.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered"
            })}
          >
            GET STARTED
          </Link>
          <Button>
            LEARN MORE

          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
