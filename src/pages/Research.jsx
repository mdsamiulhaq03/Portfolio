import { FlaskConical, ArrowRight, ExternalLink, Award } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const researches = [
  {
    title: "Transfer Learning for Brain Tumor Detection & Hyperspectral Imaging",
    venue: "UCICS 2025",
    period: "Jan 2025",
    status: "Published",
    tags: ["CNN", "Transfer Learning", "Hyperspectral Imaging", "Brain Tumor", "PyTorch"],
    description: [
      "Combined CNN architectures for pixel-level hyperspectral segmentation and tumor detection.",
      "Presented at an international conference (UCICS 2025), demonstrating state-of-the-art segmentation performance.",
    ],
  },
  {
    title: "Revolutionizing Brain Tumor Diagnosis via Transfer Learning & DNNs",
    venue: null,
    period: "2024",
    status: "Research",
    tags: ["VGG-16", "ResNet-50", "MRI Classification", "Deep Learning", "TensorFlow"],
    description: [
      "Trained VGG-16 and ResNet-50 on 3,000 MRI scans achieving 97% test accuracy across 4 tumor classes.",
      "Benchmarked transfer-learning strategies with per-class precision/recall analysis to identify optimal architectures.",
    ],
  },
];

const Research = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <FlaskConical className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Research</h2>
        </div>
      </ScrollAnimation>

      <div className="relative pl-6 border-l border-white/10 space-y-12">
        {researches.map((paper) => (
          <ScrollAnimation key={paper.title}>
            <div className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border border-white/20 bg-white/70" />

              {/* Date + status */}
              <div className="flex items-center gap-3 mb-2">
                <p className="text-xs text-white/30 uppercase tracking-widest">{paper.period}</p>
                {paper.venue && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded border border-white/15 text-white/50">
                    <Award className="w-3 h-3" />
                    {paper.venue}
                  </span>
                )}
                <span className="px-2 py-0.5 text-xs rounded border border-white/10 text-white/30">
                  {paper.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white/85 mb-3 leading-snug">
                {paper.title}
              </h3>

              {/* Description bullets */}
              <ul className="space-y-3 mb-4">
                {paper.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/45 leading-relaxed hover:text-white/70 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded border border-white/10 text-white/35 hover:text-white/60 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Research;
