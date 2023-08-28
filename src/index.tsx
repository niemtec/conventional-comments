import { ActionPanel, Action, Icon, List } from "@raycast/api";

class CommentItem {
  prefix: string;
  title: string;
  subtitle: string;
  icon: string;

  constructor(prefix: string, title: string, subtitle: string, icon: string) {
    this.prefix = prefix;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
  }
}

const listItems: CommentItem[] = [
  {
    prefix: "praise: ",
    title: "Praise",
    subtitle: "Praises highlight something positive. Try to leave at least one of these comments per review",
    icon: "../assets/praise.png",
  },
  {
    prefix: "nitpick: ",
    title: "Nitpick",
    subtitle: "Nitpicks are trivial preference-based requests. These should be non-blocking by nature.",
    icon: "../assets/nitpick.png",
  },
  {
    prefix: "suggestion: ",
    title: "Suggestion",
    subtitle: "Suggestions propose improvements to the current subject. It's important to be explicit and clear on what is being suggested and why it is an improvement.",
    icon: "../assets/suggestion.png",
  },
  {
    prefix: "issue: ",
    title: "Issue",
    subtitle: "Issues highlight specific problems with the subject under review. Pair this with a suggestion or a question.",
    icon: "../assets/issue.png",
  },
  {
    prefix: "todo: ",
    title: "Todo",
    subtitle: "TODO's are small, trivial, but necessary changes. Distinguishing todo comments from issues: or suggestions: helps direct the reader's attention to comments requiring more involvement.",
    icon: "../assets/todo.png",
  },
  {
    prefix: "question: ",
    title: "Question",
    subtitle: "Questions are appropriate if you have a potential concern but are not quite sure if it's relevant or not. Asking the author for clarification or investigation can lead to a quick resolution.",
    icon: "../assets/question.png",
  },
  {
    prefix: "thought: ",
    title: "Thought",
    subtitle: "Thoughts represent an idea that popped up from reviewing. These comments are non-blocking by nature, but they are extremely valuable and can lead to more focused initiatives and mentoring opportunities.",
    icon: "../assets/thought.png",
  },
  {
    prefix: "chore: ",
    title: "Chore",
    subtitle: "Chores are simple tasks that must be done before the subject can be “officially” accepted. Usually, these comments reference some common process.",
    icon: "../assets/chore.png",
  },
  {
    prefix: "note: ",
    title: "Note",
    subtitle: "Notes are always non-blocking and simply highlight something the reader should take note of.",
    icon: "../assets/note.png",
  },
  {
    prefix: "typo: ",
    title: "Typo",
    subtitle: "Typo comments are like todo:, where the main issue is a mispelling.",
    icon: "../assets/typo.png",
  },
  {
    prefix: "polish: ",
    title: "Polish",
    subtitle: "Polish comments are like a suggestion, where there is nothing necessarily wrong with the relevant content, there's just some ways to immediately improve the quality.",
    icon: "../assets/polish.png",
  },
];

export default function Command() {
  return (
    <List>
      {listItems.map((item, index) => (
        <List.Item
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          actions={
            <ActionPanel>
              <Action.Paste content={item.prefix} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
