import { Check, ChevronsUpDown } from "lucide-react";
import { type NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { api } from "~/utils/api";

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
    {
      region: "Europe North",
    },
    {
      region: "Russia",
    },
    {
      region: "Turkey",
    },
    {
      region: "Japan",
    },
    {
      region: "Brazil",
    },
    {
      region: "Oceania",
    },
  ];

  const [open, setOpen] = useState(false);

  const [region, setRegion] = useState("");

  const [summonerName, setSummonerName] = useState("");

  const updateSummoner = (e: ChangeEvent<HTMLInputElement>) =>
    setSummonerName(e.target.value);

  const searchSummoner = () => {
    // console.log(
    //   api.summoner.searchSummonerByName.useQuery({
    //     summonerName: summonerName,
    //   })
    // );
  };

  const SummonerCard = (props: { summonerName: string }) => {
    const { data, isLoading } = api.summoner.searchSummonerByName.useQuery({
      summonerName: props.summonerName,
    });
    if (!data) return null;

    if (isLoading) return <div>Loading....</div>;

    return <div>There is a summoner name</div>;
  };
  return (
    <>
      <main className="mt-20 flex w-full flex-row items-center justify-center gap-2 p-4 md:w-4/5 lg:w-3/5">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
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
          <PopoverContent className="w-[300px] p-0">
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
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => updateSummoner(e)}
        />
        <Button
          variant="secondary"
          type="submit"
          onClick={() => searchSummoner()}
        >
          GG
        </Button>
      </main>
      {summonerName && <SummonerCard summonerName={summonerName} />}
    </>
  );
};

export default Home;
