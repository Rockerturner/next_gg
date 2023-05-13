import { ChevronsUpDown } from "lucide-react";
import { type NextPage } from "next";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Popover, PopoverTrigger } from "~/components/ui/popover";

const Home: NextPage = () => {
  const regions = [
    { server: "NA", value: "na1" },
    { server: "EUW", value: "euw" },
    { server: "KR", value: "kr1" },
  ];

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");

  return (
    <>
      <main className="flex mt-40 flex-row items-center justify-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between"
            >
              {value
                ? regions.find((region) => region.server === value)?.value
                : "Select Region"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
        </Popover>
      </main>
    </>
  );
};

export default Home;
