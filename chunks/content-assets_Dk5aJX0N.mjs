const __ASTRO_IMAGE_IMPORT_Z642xb = new Proxy({"src":"/assets/create_image_option.png","width":819,"height":318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/mightyl/src/content/blog/create_image_option.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/mightyl/src/content/blog/create_image_option.png");
							return target[name];
						}
					});

const contentAssets = new Map([["create_image_option.png?astroContentImageFlag=&importer=src%2Fcontent%2Fblog%2F2_ai_prompt_patterns.md", __ASTRO_IMAGE_IMPORT_Z642xb]]);

export { contentAssets as default };
