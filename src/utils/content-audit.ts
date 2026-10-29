export interface ContentIssue {
  file: string;
  line: number;
  rule: string;
  value: string;
}

const EXCLUDED_PATHS = [
  '.audit-baseline.json',
];

export function isExcluded(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  return EXCLUDED_PATHS.some((p) => normalized.startsWith(p));
}

export interface PlaceholderPattern {
  rule: string;
  patterns: RegExp[];
}

export const PLACEHOLDER_PATTERNS: PlaceholderPattern[] = [
  {
    rule: 'example-email',
    patterns: [/example\.com/i, /example\.org/i],
  },
  {
    rule: 'placeholder-social-href',
    patterns: [/"facebook":\s*"#"/, /"instagram":\s*"#"/, /"twitter":\s*"#"/, /"linkedin":\s*"#"/, /"youtube":\s*"#"/],
  },
  {
    rule: 'placeholder-twitter-handle',
    patterns: [/"twitterHandle":\s*"@"/],
  },
  {
    rule: 'placeholder-text',
    patterns: [/:\s*"[^"]*placeholder[^"]*"/i],
  },
];

export function auditContent(
  source: string,
  filePath: string,
): ContentIssue[] {
  const issues: ContentIssue[] = [];

  if (isExcluded(filePath)) return issues;

  for (const patternDef of PLACEHOLDER_PATTERNS) {
    for (const regex of patternDef.patterns) {
      let match: RegExpExecArray | null;
      const globalRegex = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
      while ((match = globalRegex.exec(source)) !== null) {
        const lineNum = source.slice(0, match.index).split('\n').length;
        if (!issues.some((i) => i.file === filePath && i.line === lineNum && i.rule === patternDef.rule)) {
          issues.push({
            file: filePath,
            line: lineNum,
            rule: patternDef.rule,
            value: match[0],
          });
        }
      }
    }
  }

  return issues;
}
