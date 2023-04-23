import { o as createVNode, s as spreadAttributes, F as Fragment } from './astro.4fa9e38b.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"draft":false,"name":"Marcell Ziemann","title":"Principal Strategist","avatar":{"src":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280","alt":"Marcell Ziemann"},"publishDate":"2092-11-08 15:39"};
				const file = "/home/mosaic/redant-astro/src/content/team/marcell-ziemann.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
