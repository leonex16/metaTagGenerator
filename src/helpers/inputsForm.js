import UiInput from '../components/UI/Input/Input';
import UiSelect from '../components/UI/Select/Select';
import { encoding, lang, colorScheme, twitterCard, booleanIOS, statusBarIOS } from './dataSelect';

const inputsForm = [
	{
		Recommend: [
			<UiSelect key='recommend_lang' labelText='Language' name='recommend_lang' selectData={lang} />,
			<UiSelect key='recommend_encoding' labelText='Encoding' name='recommend_encoding' selectData={encoding} />,
			<UiInput
				key='recommend_title'
				labelText='Title'
				name='recommend_title'
				inputType='text'
				placeholder='Maximum length 50 characters'
			/>,
			<UiInput
				key='recommend_description'
				labelText='Description'
				name='recommend_description'
				inputType='text'
				placeholder='Maximum length 150 characters'
			/>,
			<UiInput
				key='recommend_author'
				labelText='Author'
				name='recommend_author'
				inputType='text'
				placeholder='Name and/or Email"'
			/>,
			<UiInput
				key='recommend_copyright'
				labelText='Copyright'
				name='recommend_copyright'
				inputType='text'
				placeholder='Company Name'
			/>,
			<UiInput key='recommend_colorTheme' labelText='Color Theme' name='recommend_colorTheme' inputType='color' />,
			<UiSelect
				key='recommend_colorScheme'
				labelText='Color Scheme'
				name='recommend_colorScheme'
				selectData={colorScheme}
			/>,
			// <UiInput
			// 	key='recommend_viewport'
			// 	labelText='Viewport'
			// 	name='recommend_viewport'
			// 	inputType='text'
			// 	placeholder=''
			// />,
		],
	},
	{
		'Open Graph & Facebook': [
			<UiInput
				key='ogAndFb_title'
				labelText='Title'
				name='ogAndFb_title'
				inputType='text'
				placeholder='The Name or Title'
			/>,
			<UiInput
				key='ogAndFb_description'
				labelText='Description'
				name='ogAndFb_description'
				inputType='text'
				placeholder='This is the page description'
			/>,
			<UiInput
				key='ogAndFb_image'
				labelText='Image'
				name='ogAndFb_image'
				inputType='text'
				placeholder='../path/to/image.png'
			/>,
			<UiSelect
				key='ogAndFb_locale'
				labelText='Locale'
				name='ogAndFb_locale'
				selectData={lang.map(obj => ({ ...obj, value: obj.value.replaceAll('-', '_') }))}
			/>,
			<UiInput
				key='ogAndFb_siteName'
				labelText='Site Name'
				name='ogAndFb_siteName'
				inputType='text'
				placeholder='The Web Site Name'
			/>,
			<UiInput
				key='ogAndFb_url'
				labelText='Url'
				name='ogAndFb_url'
				inputType='text'
				placeholder='https://www.imdb.com/access/to/post'
			/>,
			<UiInput key='ogAndFb_type' labelText='Type' name='ogAndFb_type' inputType='text' placeholder='' />,
		],
	},
	{
		Twitter: [
			<UiInput
				key='twitter_title'
				labelText='Title'
				name='twitter_title'
				inputType='text'
				placeholder='The Name or Title'
			/>,
			<UiInput
				key='twitter_description'
				labelText='Description'
				name='twitter_description'
				inputType='text'
				placeholder='This is the page description'
			/>,
			<UiInput
				key='twitter_image'
				labelText='Image'
				name='twitter_image'
				inputType='text'
				placeholder='../path/to/image.jpg'
			/>,
			<UiInput
				key='twitter_imageAlt'
				labelText='Imagen Alt'
				name='twitter_imageAlt'
				inputType='text'
				placeholder='Alt text for image'
			/>,
			<UiSelect key='twitter_card' labelText='Card' name='twitter_card' selectData={twitterCard} />,
		],
	},
	{
		'Google +': [
			<UiInput
				key='googlePlus_title'
				labelText='Title'
				name='googlePlus_title'
				inputType='text'
				placeholder='The Name or Title'
			/>,
			<UiInput
				key='googlePlus_description'
				labelText='Description'
				name='googlePlus_description'
				inputType='text'
				placeholder='This is the page description'
			/>,
			<UiInput
				key='googlePlus_image'
				labelText='Image'
				name='googlePlus_image'
				inputType='text'
				placeholder='../path/to/image.jpg'
			/>,
		],
	},
	{
		iOS: [
			<UiSelect key='ios_captable' labelText='Captable' name='ios_captable' selectData={booleanIOS} />,
			<UiSelect
				key='ios_statusBarStyle'
				labelText='Status Bar Style'
				name='ios_statusBarStyle'
				selectData={statusBarIOS}
			/>,
		],
	},
	{
		Windows: [
			<UiInput key='windows_color' labelText='Color' name='windows_color' inputType='color' />,
			<UiInput
				key='windows_image'
				labelText='Image'
				name='windows_image'
				inputType='text'
				placeholder='../path/to/image.png'
			/>,
		],
	},
	{
		Links: [
			<UiInput
				key='links_appleTouchIcon'
				labelText='Apple Icon'
				name='links_appleTouchIcon'
				inputType='text'
				placeholder='../path/to/image.png'
			/>,
			<UiInput
				key='links_appleTouchStartupImage'
				labelText='Apple Splash Image'
				name='links_appleTouchStartupImage'
				inputType='text'
				placeholder='../path/to/image.png'
			/>,
			<UiInput
				key='links_canonical'
				labelText='Canonical'
				name='links_canonical'
				inputType='text'
				placeholder='https://www.twitter.com/your/link/most/important'
			/>,
			<UiInput
				key='links_manifest'
				labelText='Manifest'
				name='links_manifest'
				inputType='text'
				placeholder='../path/to/manifest.json'
			/>,
			<UiInput
				key='links_favicon'
				labelText='Favicon'
				name='links_favicon'
				inputType='text'
				placeholder='../path/to/image.[ico|png]'
			/>,
			<UiInput
				key='links_sitemap'
				labelText='Site Map'
				name='links_sitemap'
				inputType='text'
				placeholder='../path/to/sitemap.xml'
			/>,
		],
	},
];

export default inputsForm;
