import { o as createVNode, s as spreadAttributes, F as Fragment } from './astro.4fa9e38b.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>We’re thrilled to announce that our professional heating, ventilation, and air conditioning (HVAC) services are now available to homes and businesses in Saskatoon!</p>\n<p>At Red Ant HVAC, we take pride in providing reliable, efficient, and affordable solutions that cater to the diverse needs of our clients. Our team of experienced technicians is dedicated to ensuring that your home or business remains comfortable throughout the year.</p>\n<p>Our range of services includes:</p>\n<ul>\n<li>Heating system installation, repair, and maintenance</li>\n<li>Air conditioning system installation, repair, and maintenance</li>\n<li>Ventilation system installation, repair, and maintenance</li>\n<li>Customized HVAC solutions for residential and commercial properties</li>\n<li>Emergency HVAC services available 24/7</li>\n</ul>\n<p>We understand that comfort and energy efficiency are essential for Saskatoon residents and businesses, and we’re committed to delivering the best HVAC solutions to meet your needs.</p>\n<p>If you’re looking for a trusted HVAC provider in Saskatoon, look no further. Contact us today to schedule an appointment or request a free quote. Our friendly customer service team is always ready to assist you.</p>\n<p>Red Ant HVAC is excited to become a part of the Saskatoon community, and we look forward to serving you soon!</p>");

				const frontmatter = {"draft":false,"title":"Introducing Our HVAC Services to Saskatoon","snippet":"We're excited to announce that our heating, ventilation, and air conditioning services are now available to homes and businesses in Saskatoon.","tags":["HVAC","Saskatoon","Heating","Cooling","Ventilation","Business"],"image":{"src":"src/assets/img/04-ac01.jpg","alt":"We are air conditioned for your comfort"},"category":"Announcements","publishDate":"2023-04-18","author":"Gideon P. Turing"};
				const file = "/home/mosaic/redant-astro/src/content/blog/001-introduce-hvac-in-sask.md";
				const url = undefined;
				function rawContent() {
					return "\nWe're thrilled to announce that our professional heating, ventilation, and air conditioning (HVAC) services are now available to homes and businesses in Saskatoon!\n\nAt Red Ant HVAC, we take pride in providing reliable, efficient, and affordable solutions that cater to the diverse needs of our clients. Our team of experienced technicians is dedicated to ensuring that your home or business remains comfortable throughout the year.\n\nOur range of services includes:\n\n- Heating system installation, repair, and maintenance\n- Air conditioning system installation, repair, and maintenance\n- Ventilation system installation, repair, and maintenance\n- Customized HVAC solutions for residential and commercial properties\n- Emergency HVAC services available 24/7\n\nWe understand that comfort and energy efficiency are essential for Saskatoon residents and businesses, and we're committed to delivering the best HVAC solutions to meet your needs.\n\nIf you're looking for a trusted HVAC provider in Saskatoon, look no further. Contact us today to schedule an appointment or request a free quote. Our friendly customer service team is always ready to assist you.\n\nRed Ant HVAC is excited to become a part of the Saskatoon community, and we look forward to serving you soon!\n";
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
