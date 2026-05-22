import { AdminCard } from "@/components/admin/AdminCard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { keywordTopics } from "@/data/keywords";

export default function AdminKeywordsPage() {
  return (
    <>
      <AdminHeader
        title="Keyword Topics"
        description="Structured SEO topics used by the local draft generator. These are data objects, not live pages."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <AdminCard title="Topic Inventory" description="Seed keywords, intent, category, priority, and connected tools.">
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <div className="hidden grid-cols-[1.4fr_0.8fr_0.8fr_0.7fr] gap-4 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500 lg:grid">
              <span>Keyword</span>
              <span>Intent</span>
              <span>Category</span>
              <span>Priority</span>
            </div>
            <div className="divide-y divide-slate-200">
              {keywordTopics.map((topic) => (
                <article key={topic.id} className="grid gap-3 px-4 py-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.7fr] lg:items-center">
                  <div className="min-w-0">
                    <h2 className="font-bold text-slate-950">{topic.primaryKeyword}</h2>
                    <p className="mt-1 text-xs text-slate-500">/{topic.slug}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 lg:hidden">{topic.notes}</p>
                  </div>
                  <div className="text-sm text-slate-700">{topic.searchIntent}</div>
                  <div className="text-sm text-slate-700">{topic.category}</div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge tone={topic.priority === "high" ? "success" : "neutral"}>{topic.priority}</StatusBadge>
                    <StatusBadge>{topic.difficulty}</StatusBadge>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AdminCard>
      </div>
    </>
  );
}
