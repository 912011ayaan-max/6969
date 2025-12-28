import { Bell, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type NoticeItem = { key?: string; type?: string; title?: string; description?: string; timestamp?: number };

const Notices = () => {
  const [items, setItems] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "https://ool-site-updates-default-rtdb.firebaseio.com/notices.json";
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load notices");
        const data = await res.json();
        if (!data) {
          setItems([]);
          return;
        }
        const arr = Object.entries(data).map(([key, val]: [string, any]) => ({ key, ...(val || {}) })) as NoticeItem[];
        arr.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        setItems(arr);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="notices" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Notices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-school-gold/20 rounded-lg flex items-center justify-center">
                <Bell className="h-5 w-5 text-school-gold" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Notices & Events
              </h2>
            </div>

            <div className="space-y-4">
              {loading && <div className="text-sm text-muted-foreground">Loading notices…</div>}
              {!loading && items.length === 0 && <div className="text-sm text-muted-foreground">No current notices.</div>}
              {error && <div className="text-sm text-red-500">{error}</div>}
              {!loading &&
                items.map((notice) => (
                  <div
                    key={notice.key}
                    className="group bg-card rounded-xl p-5 border border-border hover:border-school-gold/30 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {notice.type || "Notice"}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {notice.title || "Untitled"}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{notice.description || ""}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-school-gold group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Upcoming Events removed */}
        </div>
      </div>
    </section>
  );
};

export default Notices;
