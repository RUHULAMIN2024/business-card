import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { businessCardIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: businessCardIcon,

	// Build in Functions
	edit: Edit,

	save: () => null
});