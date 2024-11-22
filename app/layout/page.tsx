import { ScrollArea } from '@/components/ui/scroll-area';
import { Armchair } from 'lucide-react';

export default function AuditoriumLayout() {
  const leftSection = [
    { row: 1, chairs: 16 },
    { row: 2, chairs: 17 },
    { row: 3, chairs: 18 },
    { row: 4, chairs: 15 },
    { row: 5, chairs: 19 },
    { row: 6, chairs: 18 },
    { row: 7, chairs: 17 },
    { row: 8, chairs: 18 },
    { row: 9, chairs: 15 },
    { row: 10, chairs: 16 },
    { row: 11, chairs: 15 },
    { row: 12, chairs: 16 },
  ];

  const rightSection = [
    { row: 1, chairs: 16 },
    { row: 2, chairs: 17 },
    { row: 3, chairs: 18 },
    { row: 4, chairs: 15 },
    { row: 5, chairs: 19 },
    { row: 6, chairs: 18 },
    { row: 7, chairs: 17 },
    { row: 8, chairs: 18 },
    { row: 9, chairs: 15 },
    { row: 10, chairs: 16 },
    { row: 11, chairs: 15 },
    { row: 12, chairs: 16 },
  ];

  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen p-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Auditorium Layout
        </h1>
        <div className="mt-12 flex h-16 items-center justify-center rounded-b-full bg-gray-600">
          <span className="text-4xl font-bold text-white">STAGE</span>
        </div>
        <div className="mx-auto mt-10 w-full rounded-lg bg-gray-700 p-6 shadow-lg">
          <div className="grid grid-cols-2 gap-5">
            {/* Left Section */}
            <div>
              <h2 className="mb-4 text-center text-xl font-semibold text-white">
                Left Section
              </h2>
              {leftSection.map((row) => (
                <div key={`left-${row.row}`} className="mb-4  flex justify-end">
                  {[...Array(row.chairs)].map((_, index) => (
                    <div
                      key={`left-${row.row}-${index}`}
                      className="mx-1 flex flex-col items-center"
                    >
                      <Armchair
                        className="size-6 text-blue-500"
                        aria-label={`Left section, Row ${row.row}, Seat ${index + 1}`}
                      />
                      <span className="mt-1 text-xs text-white">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <h2 className="mb-4 text-center text-xl font-semibold text-white">
                Right Section
              </h2>
              {rightSection.map((row) => (
                <div
                  key={`right-${row.row}`}
                  className="mb-4 flex justify-start"
                >
                  {[...Array(row.chairs)].map((_, index) => (
                    <div
                      key={`right-${row.row}-${index}`}
                      className="mx-1 flex flex-col items-center"
                    >
                      <Armchair
                        className="size-6 text-blue-500"
                        aria-label={`Right section, Row ${row.row}, Seat ${index + 1}`}
                      />
                      <span className="mt-1 text-xs text-white">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
