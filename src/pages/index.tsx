import { Check, ChevronsUpDown } from "lucide-react";
import { type NextPage } from "next";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

const Home: NextPage = () => {
  const servers = [
    {
      region: "North America",
    },
    {
      region: "Europe West",
    },
    {
      region: "Korea",
    },
    {
      region: "Latin North America",
    },
    {
      region: "Latin South America",
    },
  ];

  const [open, setOpen] = useState(false);

  const [region, setRegion] = useState("");

  return (
    <>
      <main className="mt-40 flex flex-row items-center justify-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {region
                ? servers.find(
                    (server) =>
                      server.region.toLowerCase() === region.toLowerCase()
                  )?.region
                : "Select Region"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search for Region" />
              <CommandEmpty>No Region Found.</CommandEmpty>
              <CommandGroup>
                {servers.map((server) => (
                  <CommandItem
                    key={server.region}
                    onSelect={(currentRegion) => {
                      setRegion(currentRegion === region ? "" : currentRegion);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        region.toLowerCase() === server.region.toLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {server.region}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </main>
    </>
  );
};

export default Home;
