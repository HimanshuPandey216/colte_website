import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, GraduationCap, CheckCircle2, Quote, ExternalLink, Calendar, HeartHandshake } from 'lucide-react';

export default function NotesOfAppreciation({ onOpenEnquiry }) {
  const [activeNote, setActiveNote] = useState(0);

  const notes = [
    {
      id: 'sathyabama',
      institution: 'Sathyabama Institute of Science and Technology',
      type: 'Academic Partner',
      programme: '1-Day Academia Programme',
      date: 'Recent Cohort',
      badge: 'Academic Recognition',
      color: 'from-amber-500 to-orange-500',
      icon: GraduationCap,
      summary: 'Delivered an interactive, practical logistics immersion programme for MBA students and faculty members.',
      content: [
        'We are delighted to receive this heartfelt note of appreciation from Sathyabama Institute of Science and Technology for successfully conducting the 1-Day Academia Programme at COLTE. The programme provided MBA students and faculty members with valuable insights into logistics concepts through practical, interactive and industry-oriented learning.',
        'We sincerely appreciate their recognition and support. This acknowledgement motivates us to continue delivering meaningful learning experiences and building stronger collaborations with academic institutions.'
      ],
      highlights: [
        'Practical, interactive logistics simulations for MBA scholars',
        'Direct faculty engagement with Industry 4.0 warehouse setups',
        'Strengthening long-term academia-industry bridges'
      ]
    },
    {
      id: 'lucas',
      institution: 'Lucas Indian Service Limited',
      type: 'Corporate Enterprise Partner',
      programme: 'Warehouse Excellence Training Programme – July 2026',
      date: 'July 2026',
      badge: 'Corporate Training Excellence',
      color: 'from-colte-navy-900 to-colte-navy-950',
      icon: Building2,
      summary: 'Executed dedicated corporate workforce upskilling for Warehouse and Supply Chain management teams.',
      content: [
        'We are delighted to receive this heartfelt note of appreciation from Lucas Indian Service Limited for successfully organizing and delivering the Warehouse Excellence Training Programme for their Warehouse and Supply Chain team.',
        'The thoughtfully designed sessions, contemporary industry topics and simulator-based experiential learning provided the participants with valuable insights and practical exposure. The participants appreciated the relevance of the content, the expertise of the faculty and the overall learning experience.',
        'We sincerely appreciate their recognition of the warm hospitality, seamless coordination and professionalism demonstrated by the entire Logistics Sector Skill Council team throughout the programme.'
      ],
      highlights: [
        'Simulator-based experiential learning for active warehouse personnel',
        'Contemporary industry topics tailored to Lucas Indian Service operations',
        'Commended faculty expertise, coordination & hospitality by LSC team'
      ]
    }
  ];

  const current = notes[activeNote];

  return (
    <section id="appreciations" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Institutional Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Notes of <span className="text-colte-orange">Appreciation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Leading academic universities and corporate industry giants recognise COLTE Chennai for excellence in experiential logistics instruction and hospitality.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {notes.map((n, idx) => (
            <button
              key={n.id}
              onClick={() => setActiveNote(idx)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeNote === idx
                  ? 'bg-colte-navy-900 text-white shadow-premium scale-105'
                  : 'bg-colte-light text-colte-text-secondary hover:text-colte-navy-900 hover:bg-gray-100'
              }`}
            >
              <HeartHandshake className={`w-4 h-4 ${activeNote === idx ? 'text-colte-orange' : 'text-gray-400'}`} />
              <span>{n.institution}</span>
            </button>
          ))}
        </div>

        {/* Note Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-colte-light rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-premium relative"
          >
            {/* Top metadata row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-colte-navy-900 text-colte-orange flex items-center justify-center shadow-md">
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-colte-orange block">
                    {current.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-colte-navy-900 font-sans">
                    {current.institution}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs font-semibold text-colte-text-muted self-start sm:self-auto bg-white px-3 py-1.5 rounded-xl border border-gray-200">
                <Calendar className="w-3.5 h-3.5 text-colte-orange" />
                <span>{current.programme}</span>
              </div>
            </div>

            {/* Note Content */}
            <div className="space-y-4 mb-8">
              <Quote className="w-10 h-10 text-colte-orange/30 -mb-2" />
              {current.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-colte-navy-900 leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Outcomes / Commendations */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-colte-navy-900 block">
                Key Commendations &amp; Programme Takeaways:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2 text-xs text-colte-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-colte-text-muted">
                Official appreciation acknowledged by Logistics Sector Skill Council (LSC) &amp; Redington.
              </span>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(`Institutional Collaboration (${current.institution})`)}
                className="px-5 py-2.5 rounded-xl bg-colte-navy-900 hover:bg-colte-navy-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Inquire for Institutional Programmes
              </button>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
