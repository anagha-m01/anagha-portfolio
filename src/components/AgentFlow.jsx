import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { flagshipProject } from "../data/resumeData";

export default function AgentFlow() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-stretch gap-0 min-w-[720px] md:min-w-0">
        {flagshipProject.flow.map((agent, i) => (
          <div key={agent.id} className="flex items-stretch flex-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex-1 rounded-xl border border-hair-soft bg-panel/60 p-4 flex flex-col justify-between min-h-[128px]"
            >
              <span className="font-mono text-[10px] text-amber-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display text-[15px] text-ink mt-3">{agent.label}</h4>
                <p className="text-[12.5px] text-ink-mute mt-1.5 leading-snug">{agent.note}</p>
              </div>
            </motion.div>

            {i < flagshipProject.flow.length - 1 && (
              <div className="flex items-center px-2 shrink-0">
                <ArrowRight size={16} className="text-hair" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
