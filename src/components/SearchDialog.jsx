import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Command, ArrowRight } from 'lucide-react'

const searchData = [
  {
    title: 'Home',
    description: 'Go to the welcome page',
    path: '/',
    keywords: ['home', 'cv', 'resume', 'start', 'welcome', 'portfolio', 'samiul haq', 'samiul haque', 'samiul', 'haque', 'full stack developer', 'ml researcher', 'web developer', 'ai developer'],
  },
  {
    title: 'About',
    description: 'Learn more about me and my background',
    path: '/about',
    keywords: ['about', 'background', 'education', 'bio', 'profile', 'cv', 'resume', 'samiul', 'haq', 'full stack developer', 'software engineer', 'web developer'],
  },
  {
    title: 'Education',
    description: 'View my educational background',
    path: '/education',
    keywords: ['education', 'university', 'college', 'degree', 'school', 'board', 'computer science', 'engineering', 'b.tech', 'bengal college'],
  },
  {
    title: 'Experience',
    description: 'Check out my professional experience',
    path: '/experience',
    keywords: ['experience', 'work', 'career', 'jobs', 'professional', 'internships', 'certificates', 'mern', 'web developer', 'full stack', 'software developer'],
  },
  {
    title: 'Skills',
    description: 'Explore my technical skills and expertise',
    path: '/skills',
    keywords: ['skills', 'technologies', 'programming', 'languages', 'frameworks', 'web', 'development', 'software', 'tools', 'react', 'node', 'javascript', 'typescript', 'next.js', 'mongodb', 'sql'],
  },
  {
    title: 'Projects',
    description: 'View my portfolio of projects',
    path: '/projects',
    keywords: ['projects', 'portfolio', 'work', 'examples', 'github', 'code', 'open-source', 'web applications', 'full stack', 'mern stack', 'react', 'node'],
  },
  {
    title: 'Certificates',
    description: 'View my certifications and achievements',
    path: '/certificates',
    keywords: ['certificates', 'certifications', 'achievements', 'courses', 'learning', 'skills', 'professional', 'development', 'awards', 'badges'],
  },
  {
    title: 'Research',
    description: 'View my ML research and published papers',
    path: '/research',
    keywords: ['research', 'paper', 'publication', 'ml', 'ai', 'machine learning', 'deep learning', 'brain tumor', 'ucics', 'ucics 2025', 'transfer learning', 'cnn', 'pytorch', 'tensorflow', 'mri', 'hyperspectral'],
  },
  {
    title: 'Contact',
    description: 'Get in touch with me',
    path: '/contact',
    keywords: ['contact', 'email', 'message', 'connect', 'hire', 'freelance', 'work', 'collaboration', 'job', 'opportunity'],
  },
]

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(searchData)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (!isOpen) return

      if (e.key === 'Escape') setIsOpen(false)

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      }

      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        navigate(results[selectedIndex].path)
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, navigate])

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter((item) => {
        const searchLower = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower))
        )
      })
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults(searchData)
    }
  }, [searchQuery])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded text-white/30 hover:text-white hover:border-white/20 transition-colors"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="text-xs uppercase tracking-widest hidden sm:block">Search</span>
        <span className="hidden md:flex items-center gap-1 px-1.5 py-0.5 border border-white/10 rounded text-xs text-white/20">
          <Command className="w-3 h-3" />
          <span>K</span>
        </span>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative flex justify-center pt-24 px-4">
        <div className="w-full max-w-xl border border-white/10 rounded-lg overflow-hidden bg-black/90 backdrop-blur-xl shadow-2xl">

          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
            <Search className="w-4 h-4 text-white/30 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search pages..."
              className="flex-1 text-sm text-white/80 bg-transparent outline-none placeholder:text-white/20 placeholder:uppercase placeholder:tracking-widest"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <span className="text-xs text-white/20 border border-white/10 rounded px-1.5 py-0.5 uppercase tracking-widest">
              Esc
            </span>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-5 py-8 text-xs text-white/20 uppercase tracking-widest text-center">
                No results found
              </div>
            ) : (
              <div className="divide-y divide-white/[0.07]">
                {results.map((result, index) => (
                  <button
                    key={result.path}
                    className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-white/5 text-white'
                        : 'text-white/40 hover:bg-white/[0.03] hover:text-white'
                    }`}
                    onClick={() => {
                      navigate(result.path)
                      setIsOpen(false)
                    }}
                  >
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest mb-0.5">
                        {result.title}
                      </div>
                      <div className="text-xs text-white/30">{result.description}</div>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-opacity ${
                        index === selectedIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDialog
