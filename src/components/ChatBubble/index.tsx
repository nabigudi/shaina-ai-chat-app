import Box from '@/components/Box';
import parse from 'html-react-parser';
import hljs from 'highlight.js';

type ChatBubble = {
  name: string,
  time: string,
  message: string,
  originUser: 'system' | 'user' | 'ai',
  loading?: boolean
}
const ChatBubble = ({name, time, message, originUser, loading=false}: ChatBubble) =>{
  const origin = {
    user: 'text-green-600',
    system: 'text-green-600',
    ai: 'text-orange-400'
  }
  const MarkdownIt = require('markdown-it');
  const markdownAccessibleLists = require("markdown-it-accessible-lists");

  const md = new MarkdownIt({
    html:         false,
    breaks:       true,
    langPrefix:   'language-', 
    linkify:      true,
    typographer:  false,
    quotes: '“”‘’',
    highlight: function (str: any, lang: any) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre className="bg-gray-300 p-5 my-3 font-mono text-sm"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {}
      }
  
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  }).use(markdownAccessibleLists);

  const result = parse(md.render(message));

  return ( 
    <div className="mx-5 my-5">
      <Box>
        <div className="p-5">
          <div className="divide-y-2">
            <div className="flex flex-row items-center pb-3">
              <h1 className={`text-lg font-bold mr-3 ${origin[originUser]}`}>{name}</h1>
              <span className="text-gray-500 text-xs">{time}</span>
              {loading && <div className="dot-pulse ml-5"></div>}
            </div>
            <div className='markdown'>{result}</div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default ChatBubble;