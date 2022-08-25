import {writeFileSync} from "fs";
import {collections} from "./src/data.js";

const LINE_BREAK = `\r\n`;
const PARAGRAPH_BREAK = `${LINE_BREAK}${LINE_BREAK}`;
const INITIAL_TITLE_LEVEL = 2;
const FILE_NAME = `blueprint.md`;
const DEFAULT_URL_ICON = "📜";
const URL_ICON_MAPPER = [
	["📹", ["youtube"]],
	["🔖", ["wikipeia"]],
	["🧪", ["codelab", "github"]],
	["⚙️", ["toolbox", "webaim", "w3c", "thinkwithgoogle", "w3"]],
	["🎓", ["course", "udacity"]],
	["📖", ["book", "amazon", "refactoringui.com"]],
	["📐", ["resource", "glitch.me", "codepen"]],
	["❓", ["quora", "stackoverflow"]],
];

/**
 * Returns the origin of the url.
 * @param url
 * @returns {string}
 */
function getURLOrigin (url) {
	try {
		return (new URL(url)).origin;
	} catch (err) {
		return url;
	}
}

/**
 * Returns an icon for a URL.
 * @param url
 * @returns {string}
 */
function iconForUrl (url) {
	for (const [icon, keywords] of URL_ICON_MAPPER) {
		if (keywords.find(k => url.includes(k)) != null) {
			return icon;
		}
	}

	return DEFAULT_URL_ICON;
}

/**
 * Returns a logo for a URL.
 * @param url
 * @returns {string}
 */
function logoForUrl (url) {
	return `<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(getURLOrigin(url))}" alt="Logo" />`;
}

/**
 * Generals markdown for a heading.
 * @param text
 * @param level
 * @returns {string}
 */
function generateMarkdownHeading (text, level) {
	return `${Array(Math.min(level, 6)).fill("#").join("")} ${text}`;
}

/**
 * Generates markdown for an array of links.
 * @param links
 * @returns {string}
 */
function generateLinksMarkdown (links) {
	//const parts = links.map(([name, url]) => `* [ ] ${iconForUrl(url)} [${name}](${url}) ${logoForUrl(url)}`);
	const parts = links.map(([name, url]) => `* [ ] [${logoForUrl(url)} ${name}](${url})`);
	//const parts = links.map(([name, url]) => `* [ ] <a href="${url}" target="_blank">${logoForUrl(url)} ${name}</a>`);
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for a skill.
 * @param skill
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillMarkdown (skill, area, collection, level) {
	const {name, description, skills} = skill;
	let markdown = `${generateMarkdownHeading(name, level)}${PARAGRAPH_BREAK}${description != null ? `${description.text != null ? `${description.text}${PARAGRAPH_BREAK}` : ""}${generateLinksMarkdown(description.links || [])}` : ""}${LINE_BREAK}`;
	if (skills != null) {
		markdown = `${markdown}${LINE_BREAK}${generateSkillsMarkdown(skills, area, collection, level + 1)}`
	}

	return markdown;
}

/**
 * Generates markdown for an array of skills.
 * @param skills
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillsMarkdown (skills, area, collection, level) {
	const parts = skills.map(skill => generateSkillMarkdown(skill, area, collection, level));
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for an area.
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateAreaMarkdown (area, collection, level) {
	return `${area.name != null ? `${generateMarkdownHeading(area.name, level)}${PARAGRAPH_BREAK}` : ""}${generateSkillsMarkdown(area.skills, area, collection, level)}`
}

/**
 * Generates markdown for a collection.
 * @param collection
 * @param level
 * @returns {string}
 */
function generateCollectionMarkdown (collection, level) {
	const parts = collection.areas.map(area => generateAreaMarkdown(area, collection, level + 1));
	return `${generateMarkdownHeading(collection.name, level)}${PARAGRAPH_BREAK}${parts.join(PARAGRAPH_BREAK)}`;
}

/**
 * Generates markdown for an array of collections.
 * @param collections
 * @returns {string}
 */
function generateCollectionsMarkdown (collections) {
	const parts = collections.map(collection => generateCollectionMarkdown(collection, INITIAL_TITLE_LEVEL));
	return parts.join(PARAGRAPH_BREAK);
}

// Generate the collections markdown
const collectionsMarkdown = generateCollectionsMarkdown(collections);

// Create the blueprint file.
writeFileSync(FILE_NAME, `<h1 align="center">Web Skills</h1>
<p align="center">
	Web Skills is a visual overview of useful skills to learn as a web developer. Go to <a href="https://andreasbm.github.io/web-skills" target="_blank" aria-label="Link to Web Skills">https://andreasbm.github.io/web-skills</a> to check out the visual overview or scroll through this readme to get the overview <a href="#-fundamentals" target="_blank" aria-label="Link to list of skills">as a list</a>. If you like the project you are very welcome to <a href="https://github.com/andreasbm/web-skills/stargazers" aria-label="Become stargazer link">become a stargazer 🤩</a>
</p> 
<p align="center">
	<a href="http://andreasbm.github.io/web-skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Web Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Table of Contents</summary>
<br />
{{ template:toc }}
</details>

### 이 프로젝트는 무엇을 위한 것인가
'Datastructure Master'는 컴퓨터공학 전공자와 비전공자를 포함한 자료구조를 학습하고자 하는 학생들의 자료구조에 대한 이해 능력을 증진하기 위한 프로젝트임
'Datastructure Master' 프로젝트를 통해 자료구조의 정의, 개념과 같은 기초 지식을 쌓고, 그 지식을 프로그래밍 언어로 구현함으로써 자료구조 학습을 단계적으로 진행할 수 있도록 도움을 줌
또한 'Datastructure Master' 프로젝트는 정의, 개념, 구현을 한 페이지에 제공함으로써 자료구조 지식에 관한 접근 용이성을 편리하게 함

### 어떤 문제를 해결할 수 있는가?
자료구조의 올바른 정의와 개념을 정립함
자료구조의 구현 방법 및 활용 방법을 정립함
자료구조를 각종 프로그래밍 언어로 구현해봄으로써 프로그래밍 실력 향상에 기여함
다양한 예제 문제를 통해서 자료구조에 대한 이해도를 자각함
프로그래밍의 기반이 되는 자료구조를 학습함으로써 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장 가능

### 왜 이 프로젝트가 유용한가
알기 쉬운 UI, 링크를 모아둠으로써 접근성 향상
유튜브 미디어 시각 자료를 활용함으로써 이해 증진 활용에 효과적 

### 어떤 사람들이 이 프로젝트를 사용하면 좋은가
컴퓨터 과학을 전공하는 전공자
프로그래밍 언어를 독학하고자 하는 비전공자
자료구조에 대한 기초 지식을 쌓아 지식 기반을 탄탄히 하고자 하는 학생

${collectionsMarkdown}
{{ template:contributors }}
{{ template:license }}`);