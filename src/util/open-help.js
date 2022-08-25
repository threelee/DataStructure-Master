import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
			
			<h2>DataStructure Master?</h2>

			<h3>이 프로젝트는 무엇을 위한 것인가</h3>
			<p>'Datastructure Master'는 컴퓨터공학 전공자와 비전공자를 포함한 자료구조를 학습하고자 하는 학생들의 자료구조에 대한 이해 능력을 증진하기 위한 프로젝트임
			'Datastructure Master' 프로젝트를 통해 자료구조의 정의, 개념과 같은 기초 지식을 쌓고, 그 지식을 프로그래밍 언어로 구현함으로써 자료구조 학습을 단계적으로 진행할 수 있도록 도움을 줌
			또한 'Datastructure Master' 프로젝트는 정의, 개념, 구현을 한 페이지에 제공함으로써 자료구조 지식에 관한 접근 용이성을 편리하게 함
			</p>

			<h3>어떤 문제를 해결할 수 있는가?</h3>
			<p>자료구조의 올바른 정의와 개념을 정립함
			자료구조의 구현 방법 및 활용 방법을 정립함
			자료구조를 각종 프로그래밍 언어로 구현해봄으로써 프로그래밍 실력 향상에 기여함
			다양한 예제 문제를 통해서 자료구조에 대한 이해도를 자각함
			프로그래밍의 기반이 되는 자료구조를 학습함으로써 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장 가능
			</p>

			<h3>왜 이 프로젝트가 유용한가</h3>
			<p>알기 쉬운 UI, 링크를 모아둠으로써 접근성 향상
			유튜브 미디어 시각 자료를 활용함으로써 이해 증진 활용에 효과적 </p>

			<h3>어떤 사람들이 이 프로젝트를 사용하면 좋은가</h3>
			<p>컴퓨터 과학을 전공하는 전공자
			프로그래밍 언어를 독학하고자 하는 비전공자
			자료구조에 대한 기초 지식을 쌓아 지식 기반을 탄탄히 하고자 하는 학생</p>
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}