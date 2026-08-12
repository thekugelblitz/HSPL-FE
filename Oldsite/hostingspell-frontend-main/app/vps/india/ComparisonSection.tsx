import { INDIA_VPS_OFFSHORE_COMPARISON } from "@/lib/constants-vps-india";
import { Check, X } from "lucide-react";

function renderCell(value: string, columnIndex: number) {
    if (columnIndex === 1) {
        return (
            <span className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{value}</span>
            </span>
        );
    }

    return (
        <span className="flex items-start gap-2 text-muted-foreground">
            <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
            <span>{value}</span>
        </span>
    );
}

export function ComparisonSection() {
    const { headers, rows } = INDIA_VPS_OFFSHORE_COMPARISON;

    return (
        <section className="py-16 md:py-24 bg-muted/40 dark:bg-muted/10" id="comparison">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">
                        Why Go Local
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        India VPS vs{" "}
                        <span className="text-blue-600">Offshore Hosting</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Serving Indian users from a local data center is not just faster — it is smarter
                        for SEO, compliance, support, and customer satisfaction.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-card dark:bg-card border-b border-border">
                                {headers.map((header, i) => (
                                    <th
                                        key={header}
                                        className={`px-4 py-4 text-left font-bold ${
                                            i === 1
                                                ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300"
                                                : ""
                                        }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr
                                    key={row[0]}
                                    className={
                                        rowIndex % 2 === 0
                                            ? "bg-background dark:bg-background"
                                            : "bg-muted/30 dark:bg-muted/10"
                                    }
                                >
                                    {row.map((cell, colIndex) => (
                                        <td
                                            key={`${row[0]}-${colIndex}`}
                                            className={`px-4 py-3 align-top ${
                                                colIndex === 1
                                                    ? "bg-blue-50/50 dark:bg-blue-950/20 font-medium"
                                                    : colIndex === 0
                                                      ? "font-semibold"
                                                      : ""
                                            }`}
                                        >
                                            {colIndex === 0 ? cell : renderCell(cell, colIndex)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
