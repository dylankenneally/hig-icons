import React from 'react';
import * as HIGIcons from "@hig/icons";

let iconSet = [
	{ name: 'AddFolder24', component: <HIGIcons.AddFolder24 /> },
	{ name: 'AddMember24', component: <HIGIcons.AddMember24 /> },
	{ name: 'AddPage24', component: <HIGIcons.AddPage24 /> },
	{ name: 'Add24', component: <HIGIcons.Add24 /> },
	{ name: 'Alert24', component: <HIGIcons.Alert24 /> },
	{ name: 'Archive24', component: <HIGIcons.Archive24 /> },
	{ name: 'AreaPost24', component: <HIGIcons.AreaPost24 /> },
	{ name: 'Attach24', component: <HIGIcons.Attach24 /> },
	{ name: 'Attachment24', component: <HIGIcons.Attachment24 /> },
	{ name: 'Back24', component: <HIGIcons.Back24 /> },
	{ name: 'BillStack24', component: <HIGIcons.BillStack24 /> },
	{ name: 'Billing24', component: <HIGIcons.Billing24 /> },
	{ name: 'Bookmark24', component: <HIGIcons.Bookmark24 /> },
	{ name: 'Building24', component: <HIGIcons.Building24 /> },
	{ name: 'Calendar24', component: <HIGIcons.Calendar24 /> },
	{ name: 'CaretDown24', component: <HIGIcons.CaretDown24 /> },
	{ name: 'CaretLeft24', component: <HIGIcons.CaretLeft24 /> },
	{ name: 'CaretRight24', component: <HIGIcons.CaretRight24 /> },
	{ name: 'CaretUp24', component: <HIGIcons.CaretUp24 /> },
	{ name: 'CartEmpty24', component: <HIGIcons.CartEmpty24 /> },
	{ name: 'CartFull24', component: <HIGIcons.CartFull24 /> },
	{ name: 'Chat24', component: <HIGIcons.Chat24 /> },
	{ name: 'Checklist24', component: <HIGIcons.Checklist24 /> },
	{ name: 'Checkmark24', component: <HIGIcons.Checkmark24 /> },
	{ name: 'Clock24', component: <HIGIcons.Clock24 /> },
	{ name: 'ClosedCaptioning24', component: <HIGIcons.ClosedCaptioning24 /> },
	{ name: 'Cloud24', component: <HIGIcons.Cloud24 /> },
	{ name: 'Collaboration24', component: <HIGIcons.Collaboration24 /> },
	{ name: 'CollapsePanel24', component: <HIGIcons.CollapsePanel24 /> },
	{ name: 'Comment24', component: <HIGIcons.Comment24 /> },
	{ name: 'Compare24', component: <HIGIcons.Compare24 /> },
	{ name: 'Complete24', component: <HIGIcons.Complete24 /> },
	{ name: 'Copy24', component: <HIGIcons.Copy24 /> },
	{ name: 'CtaArrowRight24', component: <HIGIcons.CtaArrowRight24 /> },
	{ name: 'Dashboard24', component: <HIGIcons.Dashboard24 /> },
	{ name: 'DeviceDesktop24', component: <HIGIcons.DeviceDesktop24 /> },
	{ name: 'DeviceMobile24', component: <HIGIcons.DeviceMobile24 /> },
	{ name: 'DeviceTablet24', component: <HIGIcons.DeviceTablet24 /> },
	{ name: 'Devices24', component: <HIGIcons.Devices24 /> },
	{ name: 'DocumentManagement24', component: <HIGIcons.DocumentManagement24 /> },
	{ name: 'Down24', component: <HIGIcons.Down24 /> },
	{ name: 'Download24', component: <HIGIcons.Download24 /> },
	{ name: 'Edit24', component: <HIGIcons.Edit24 /> },
	{ name: 'Education24', component: <HIGIcons.Education24 /> },
	{ name: 'Error24', component: <HIGIcons.Error24 /> },
	{ name: 'ExpandPanel24', component: <HIGIcons.ExpandPanel24 /> },
	{ name: 'ExportMove24', component: <HIGIcons.ExportMove24 /> },
	{ name: 'ExternalLink24', component: <HIGIcons.ExternalLink24 /> },
	{ name: 'External24', component: <HIGIcons.External24 /> },
	{ name: 'Favorite24', component: <HIGIcons.Favorite24 /> },
	{ name: 'Featured24', component: <HIGIcons.Featured24 /> },
	{ name: 'Feedback24', component: <HIGIcons.Feedback24 /> },
	{ name: 'Field24', component: <HIGIcons.Field24 /> },
	{ name: 'FileAssembly24', component: <HIGIcons.FileAssembly24 /> },
	{ name: 'FileAudio24', component: <HIGIcons.FileAudio24 /> },
	{ name: 'FileDocument24', component: <HIGIcons.FileDocument24 /> },
	{ name: 'FileGeneric24', component: <HIGIcons.FileGeneric24 /> },
	{ name: 'FileImage24', component: <HIGIcons.FileImage24 /> },
	{ name: 'FilePart24', component: <HIGIcons.FilePart24 /> },
	{ name: 'FilePdf24', component: <HIGIcons.FilePdf24 /> },
	{ name: 'FilePresentation24', component: <HIGIcons.FilePresentation24 /> },
	{ name: 'FileSpreadsheet24', component: <HIGIcons.FileSpreadsheet24 /> },
	{ name: 'FileVideo24', component: <HIGIcons.FileVideo24 /> },
	{ name: 'FileZip24', component: <HIGIcons.FileZip24 /> },
	{ name: 'FilterTokens24', component: <HIGIcons.FilterTokens24 /> },
	{ name: 'Filter24', component: <HIGIcons.Filter24 /> },
	{ name: 'Flag24', component: <HIGIcons.Flag24 /> },
	{ name: 'FolderOpen24', component: <HIGIcons.FolderOpen24 /> },
	{ name: 'Folder24', component: <HIGIcons.Folder24 /> },
	{ name: 'Forums24', component: <HIGIcons.Forums24 /> },
	{ name: 'Forward24', component: <HIGIcons.Forward24 /> },
	{ name: 'Globe24', component: <HIGIcons.Globe24 /> },
	{ name: 'Graph24', component: <HIGIcons.Graph24 /> },
	{ name: 'Grid24', component: <HIGIcons.Grid24 /> },
	{ name: 'Help24', component: <HIGIcons.Help24 /> },
	{ name: 'Hidden24', component: <HIGIcons.Hidden24 /> },
	{ name: 'Hierarchy24', component: <HIGIcons.Hierarchy24 /> },
	{ name: 'Home24', component: <HIGIcons.Home24 /> },
	{ name: 'Import24', component: <HIGIcons.Import24 /> },
	{ name: 'Inbox24', component: <HIGIcons.Inbox24 /> },
	{ name: 'Info24', component: <HIGIcons.Info24 /> },
	{ name: 'Item24', component: <HIGIcons.Item24 /> },
	{ name: 'Link24', component: <HIGIcons.Link24 /> },
	{ name: 'List24', component: <HIGIcons.List24 /> },
	{ name: 'Location24', component: <HIGIcons.Location24 /> },
	{ name: 'Lock24', component: <HIGIcons.Lock24 /> },
	{ name: 'Mail24', component: <HIGIcons.Mail24 /> },
	{ name: 'ManageAccess24', component: <HIGIcons.ManageAccess24 /> },
	{ name: 'Maximize24', component: <HIGIcons.Maximize24 /> },
	{ name: 'Minimize24', component: <HIGIcons.Minimize24 /> },
	{ name: 'MoreVertical24', component: <HIGIcons.MoreVertical24 /> },
	{ name: 'More24', component: <HIGIcons.More24 /> },
	{ name: 'Mute24', component: <HIGIcons.Mute24 /> },
	{ name: 'NotEditable24', component: <HIGIcons.NotEditable24 /> },
	{ name: 'Notification24', component: <HIGIcons.Notification24 /> },
	{ name: 'OnlineViewers24', component: <HIGIcons.OnlineViewers24 /> },
	{ name: 'Paste24', component: <HIGIcons.Paste24 /> },
	{ name: 'Pause24', component: <HIGIcons.Pause24 /> },
	{ name: 'PermissionGroup24', component: <HIGIcons.PermissionGroup24 /> },
	{ name: 'PermissionIndividual24', component: <HIGIcons.PermissionIndividual24 /> },
	{ name: 'Photos24', component: <HIGIcons.Photos24 /> },
	{ name: 'Pin24', component: <HIGIcons.Pin24 /> },
	{ name: 'Placeholder24', component: <HIGIcons.Placeholder24 /> },
	{ name: 'Play24', component: <HIGIcons.Play24 /> },
	{ name: 'Print24', component: <HIGIcons.Print24 /> },
	{ name: 'ProductsAndServices24', component: <HIGIcons.ProductsAndServices24 /> },
	{ name: 'Profile24', component: <HIGIcons.Profile24 /> },
	{ name: 'ProjectManagement24', component: <HIGIcons.ProjectManagement24 /> },
	{ name: 'Properties24', component: <HIGIcons.Properties24 /> },
	{ name: 'Publish24', component: <HIGIcons.Publish24 /> },
	{ name: 'Quantities24', component: <HIGIcons.Quantities24 /> },
	{ name: 'Recommend24', component: <HIGIcons.Recommend24 /> },
	{ name: 'Redo24', component: <HIGIcons.Redo24 /> },
	{ name: 'Report24', component: <HIGIcons.Report24 /> },
	{ name: 'Save24', component: <HIGIcons.Save24 /> },
	{ name: 'Search24', component: <HIGIcons.Search24 /> },
	{ name: 'Security24', component: <HIGIcons.Security24 /> },
	{ name: 'SelectAll24', component: <HIGIcons.SelectAll24 /> },
	{ name: 'SelectNone24', component: <HIGIcons.SelectNone24 /> },
	{ name: 'Service24', component: <HIGIcons.Service24 /> },
	{ name: 'Settings24', component: <HIGIcons.Settings24 /> },
	{ name: 'Share24', component: <HIGIcons.Share24 /> },
	{ name: 'SocialBlog24', component: <HIGIcons.SocialBlog24 /> },
	{ name: 'SocialFacebook24', component: <HIGIcons.SocialFacebook24 /> },
	{ name: 'SocialInstagram24', component: <HIGIcons.SocialInstagram24 /> },
	{ name: 'SocialLinkedin24', component: <HIGIcons.SocialLinkedin24 /> },
	{ name: 'SocialTwitter24', component: <HIGIcons.SocialTwitter24 /> },
	{ name: 'SocialYoutube24', component: <HIGIcons.SocialYoutube24 /> },
	{ name: 'Sort24', component: <HIGIcons.Sort24 /> },
	{ name: 'Subscription24', component: <HIGIcons.Subscription24 /> },
	{ name: 'Support24', component: <HIGIcons.Support24 /> },
	{ name: 'SurveyEquipment24', component: <HIGIcons.SurveyEquipment24 /> },
	{ name: 'Sync24', component: <HIGIcons.Sync24 /> },
	{ name: 'Tag24', component: <HIGIcons.Tag24 /> },
	{ name: 'Trash24', component: <HIGIcons.Trash24 /> },
	{ name: 'Unavailable24', component: <HIGIcons.Unavailable24 /> },
	{ name: 'Undo24', component: <HIGIcons.Undo24 /> },
	{ name: 'Unlink24', component: <HIGIcons.Unlink24 /> },
	{ name: 'Unlock24', component: <HIGIcons.Unlock24 /> },
	{ name: 'Unpin24', component: <HIGIcons.Unpin24 /> },
	{ name: 'Up24', component: <HIGIcons.Up24 /> },
	{ name: 'Upload24', component: <HIGIcons.Upload24 /> },
	{ name: 'UserInactive24', component: <HIGIcons.UserInactive24 /> },
	{ name: 'Visible24', component: <HIGIcons.Visible24 /> },
	{ name: 'Volume24', component: <HIGIcons.Volume24 /> },
	{ name: 'ZoomIn24', component: <HIGIcons.ZoomIn24 /> },
	{ name: 'ZoomOut24', component: <HIGIcons.ZoomOut24 /> },
	{ name: 'AddFolder16', component: <HIGIcons.AddFolder16 /> },
	{ name: 'AddMember16', component: <HIGIcons.AddMember16 /> },
	{ name: 'AddPage16', component: <HIGIcons.AddPage16 /> },
	{ name: 'Add16', component: <HIGIcons.Add16 /> },
	{ name: 'Alert16', component: <HIGIcons.Alert16 /> },
	{ name: 'Archive16', component: <HIGIcons.Archive16 /> },
	{ name: 'AreaPost16', component: <HIGIcons.AreaPost16 /> },
	{ name: 'Attach16', component: <HIGIcons.Attach16 /> },
	{ name: 'Attachment16', component: <HIGIcons.Attachment16 /> },
	{ name: 'Back16', component: <HIGIcons.Back16 /> },
	{ name: 'BillStack16', component: <HIGIcons.BillStack16 /> },
	{ name: 'Billing16', component: <HIGIcons.Billing16 /> },
	{ name: 'Bookmark16', component: <HIGIcons.Bookmark16 /> },
	{ name: 'Building16', component: <HIGIcons.Building16 /> },
	{ name: 'Calendar16', component: <HIGIcons.Calendar16 /> },
	{ name: 'CaretDown16', component: <HIGIcons.CaretDown16 /> },
	{ name: 'CaretLeft16', component: <HIGIcons.CaretLeft16 /> },
	{ name: 'CaretRight16', component: <HIGIcons.CaretRight16 /> },
	{ name: 'CaretUp16', component: <HIGIcons.CaretUp16 /> },
	{ name: 'CartEmpty16', component: <HIGIcons.CartEmpty16 /> },
	{ name: 'CartFull16', component: <HIGIcons.CartFull16 /> },
	{ name: 'Chat16', component: <HIGIcons.Chat16 /> },
	{ name: 'Checklist16', component: <HIGIcons.Checklist16 /> },
	{ name: 'Checkmark16', component: <HIGIcons.Checkmark16 /> },
	{ name: 'Clock16', component: <HIGIcons.Clock16 /> },
	{ name: 'ClosedCaptioning16', component: <HIGIcons.ClosedCaptioning16 /> },
	{ name: 'Cloud16', component: <HIGIcons.Cloud16 /> },
	{ name: 'Collaboration16', component: <HIGIcons.Collaboration16 /> },
	{ name: 'CollapsePanel16', component: <HIGIcons.CollapsePanel16 /> },
	{ name: 'Comment16', component: <HIGIcons.Comment16 /> },
	{ name: 'Compare16', component: <HIGIcons.Compare16 /> },
	{ name: 'Complete16', component: <HIGIcons.Complete16 /> },
	{ name: 'Copy16', component: <HIGIcons.Copy16 /> },
	{ name: 'CtaArrowRight16', component: <HIGIcons.CtaArrowRight16 /> },
	{ name: 'Dashboard16', component: <HIGIcons.Dashboard16 /> },
	{ name: 'DeviceDesktop16', component: <HIGIcons.DeviceDesktop16 /> },
	{ name: 'DeviceMobile16', component: <HIGIcons.DeviceMobile16 /> },
	{ name: 'DeviceTablet16', component: <HIGIcons.DeviceTablet16 /> },
	{ name: 'Devices16', component: <HIGIcons.Devices16 /> },
	{ name: 'DocumentManagement16', component: <HIGIcons.DocumentManagement16 /> },
	{ name: 'Down16', component: <HIGIcons.Down16 /> },
	{ name: 'Download16', component: <HIGIcons.Download16 /> },
	{ name: 'Edit16', component: <HIGIcons.Edit16 /> },
	{ name: 'Education16', component: <HIGIcons.Education16 /> },
	{ name: 'Error16', component: <HIGIcons.Error16 /> },
	{ name: 'ExpandPanel16', component: <HIGIcons.ExpandPanel16 /> },
	{ name: 'ExportMove16', component: <HIGIcons.ExportMove16 /> },
	{ name: 'ExternalLink16', component: <HIGIcons.ExternalLink16 /> },
	{ name: 'External16', component: <HIGIcons.External16 /> },
	{ name: 'Favorite16', component: <HIGIcons.Favorite16 /> },
	{ name: 'Featured16', component: <HIGIcons.Featured16 /> },
	{ name: 'Feedback16', component: <HIGIcons.Feedback16 /> },
	{ name: 'Field16', component: <HIGIcons.Field16 /> },
	{ name: 'FileAssembly16', component: <HIGIcons.FileAssembly16 /> },
	{ name: 'FileAudio16', component: <HIGIcons.FileAudio16 /> },
	{ name: 'FileDocument16', component: <HIGIcons.FileDocument16 /> },
	{ name: 'FileGeneric16', component: <HIGIcons.FileGeneric16 /> },
	{ name: 'FileImage16', component: <HIGIcons.FileImage16 /> },
	{ name: 'FilePart16', component: <HIGIcons.FilePart16 /> },
	{ name: 'FilePdf16', component: <HIGIcons.FilePdf16 /> },
	{ name: 'FilePresentation16', component: <HIGIcons.FilePresentation16 /> },
	{ name: 'FileSpreadsheet16', component: <HIGIcons.FileSpreadsheet16 /> },
	{ name: 'FileVideo16', component: <HIGIcons.FileVideo16 /> },
	{ name: 'FileZip16', component: <HIGIcons.FileZip16 /> },
	{ name: 'FilterTokens16', component: <HIGIcons.FilterTokens16 /> },
	{ name: 'Filter16', component: <HIGIcons.Filter16 /> },
	{ name: 'Flag16', component: <HIGIcons.Flag16 /> },
	{ name: 'FolderOpen16', component: <HIGIcons.FolderOpen16 /> },
	{ name: 'Folder16', component: <HIGIcons.Folder16 /> },
	{ name: 'Forums16', component: <HIGIcons.Forums16 /> },
	{ name: 'Forward16', component: <HIGIcons.Forward16 /> },
	{ name: 'Globe16', component: <HIGIcons.Globe16 /> },
	{ name: 'Graph16', component: <HIGIcons.Graph16 /> },
	{ name: 'Grid16', component: <HIGIcons.Grid16 /> },
	{ name: 'Help16', component: <HIGIcons.Help16 /> },
	{ name: 'Hidden16', component: <HIGIcons.Hidden16 /> },
	{ name: 'Hierarchy16', component: <HIGIcons.Hierarchy16 /> },
	{ name: 'Home16', component: <HIGIcons.Home16 /> },
	{ name: 'Import16', component: <HIGIcons.Import16 /> },
	{ name: 'Inbox16', component: <HIGIcons.Inbox16 /> },
	{ name: 'Info16', component: <HIGIcons.Info16 /> },
	{ name: 'Item16', component: <HIGIcons.Item16 /> },
	{ name: 'Link16', component: <HIGIcons.Link16 /> },
	{ name: 'List16', component: <HIGIcons.List16 /> },
	{ name: 'Location16', component: <HIGIcons.Location16 /> },
	{ name: 'Lock16', component: <HIGIcons.Lock16 /> },
	{ name: 'Mail16', component: <HIGIcons.Mail16 /> },
	{ name: 'ManageAccess16', component: <HIGIcons.ManageAccess16 /> },
	{ name: 'Maximize16', component: <HIGIcons.Maximize16 /> },
	{ name: 'Minimize16', component: <HIGIcons.Minimize16 /> },
	{ name: 'MoreVertical16', component: <HIGIcons.MoreVertical16 /> },
	{ name: 'More16', component: <HIGIcons.More16 /> },
	{ name: 'Mute16', component: <HIGIcons.Mute16 /> },
	{ name: 'NotEditable16', component: <HIGIcons.NotEditable16 /> },
	{ name: 'Notification16', component: <HIGIcons.Notification16 /> },
	{ name: 'OnlineViewers16', component: <HIGIcons.OnlineViewers16 /> },
	{ name: 'Paste16', component: <HIGIcons.Paste16 /> },
	{ name: 'Pause16', component: <HIGIcons.Pause16 /> },
	{ name: 'PermissionGroup16', component: <HIGIcons.PermissionGroup16 /> },
	{ name: 'PermissionIndividual16', component: <HIGIcons.PermissionIndividual16 /> },
	{ name: 'Photos16', component: <HIGIcons.Photos16 /> },
	{ name: 'Pin16', component: <HIGIcons.Pin16 /> },
	{ name: 'Placeholder16', component: <HIGIcons.Placeholder16 /> },
	{ name: 'Play16', component: <HIGIcons.Play16 /> },
	{ name: 'Print16', component: <HIGIcons.Print16 /> },
	{ name: 'ProductsAndServices16', component: <HIGIcons.ProductsAndServices16 /> },
	{ name: 'Profile16', component: <HIGIcons.Profile16 /> },
	{ name: 'ProjectManagement16', component: <HIGIcons.ProjectManagement16 /> },
	{ name: 'Properties16', component: <HIGIcons.Properties16 /> },
	{ name: 'Publish16', component: <HIGIcons.Publish16 /> },
	{ name: 'Quantities16', component: <HIGIcons.Quantities16 /> },
	{ name: 'Recommend16', component: <HIGIcons.Recommend16 /> },
	{ name: 'Redo16', component: <HIGIcons.Redo16 /> },
	{ name: 'Report16', component: <HIGIcons.Report16 /> },
	{ name: 'Save16', component: <HIGIcons.Save16 /> },
	{ name: 'Search16', component: <HIGIcons.Search16 /> },
	{ name: 'Security16', component: <HIGIcons.Security16 /> },
	{ name: 'SelectAll16', component: <HIGIcons.SelectAll16 /> },
	{ name: 'SelectNone16', component: <HIGIcons.SelectNone16 /> },
	{ name: 'Service16', component: <HIGIcons.Service16 /> },
	{ name: 'Settings16', component: <HIGIcons.Settings16 /> },
	{ name: 'Share16', component: <HIGIcons.Share16 /> },
	{ name: 'SocialBlog16', component: <HIGIcons.SocialBlog16 /> },
	{ name: 'SocialFacebook16', component: <HIGIcons.SocialFacebook16 /> },
	{ name: 'SocialInstagram16', component: <HIGIcons.SocialInstagram16 /> },
	{ name: 'SocialLinkedin16', component: <HIGIcons.SocialLinkedin16 /> },
	{ name: 'SocialTwitter16', component: <HIGIcons.SocialTwitter16 /> },
	{ name: 'SocialYoutube16', component: <HIGIcons.SocialYoutube16 /> },
	{ name: 'Sort16', component: <HIGIcons.Sort16 /> },
	{ name: 'Subscription16', component: <HIGIcons.Subscription16 /> },
	{ name: 'Support16', component: <HIGIcons.Support16 /> },
	{ name: 'SurveyEquipment16', component: <HIGIcons.SurveyEquipment16 /> },
	{ name: 'Sync16', component: <HIGIcons.Sync16 /> },
	{ name: 'Tag16', component: <HIGIcons.Tag16 /> },
	{ name: 'Trash16', component: <HIGIcons.Trash16 /> },
	{ name: 'Unavailable16', component: <HIGIcons.Unavailable16 /> },
	{ name: 'Undo16', component: <HIGIcons.Undo16 /> },
	{ name: 'Unlink16', component: <HIGIcons.Unlink16 /> },
	{ name: 'Unlock16', component: <HIGIcons.Unlock16 /> },
	{ name: 'Unpin16', component: <HIGIcons.Unpin16 /> },
	{ name: 'Up16', component: <HIGIcons.Up16 /> },
	{ name: 'Upload16', component: <HIGIcons.Upload16 /> },
	{ name: 'UserInactive16', component: <HIGIcons.UserInactive16 /> },
	{ name: 'Visible16', component: <HIGIcons.Visible16 /> },
	{ name: 'Volume16', component: <HIGIcons.Volume16 /> },
	{ name: 'ZoomIn16', component: <HIGIcons.ZoomIn16 /> },
	{ name: 'ZoomOut16', component: <HIGIcons.ZoomOut16 /> },
	{ name: 'CaretDownMUI', component: <HIGIcons.CaretDownMUI /> },
	{ name: 'CaretDownSUI', component: <HIGIcons.CaretDownSUI /> },
	{ name: 'CaretDownXsUI', component: <HIGIcons.CaretDownXsUI /> },
	{ name: 'CaretLeftMUI', component: <HIGIcons.CaretLeftMUI /> },
	{ name: 'CaretLeftSUI', component: <HIGIcons.CaretLeftSUI /> },
	{ name: 'CaretLeftXsUI', component: <HIGIcons.CaretLeftXsUI /> },
	{ name: 'CaretRightMUI', component: <HIGIcons.CaretRightMUI /> },
	{ name: 'CaretRightSUI', component: <HIGIcons.CaretRightSUI /> },
	{ name: 'CaretRightXsUI', component: <HIGIcons.CaretRightXsUI /> },
	{ name: 'CaretUpMUI', component: <HIGIcons.CaretUpMUI /> },
	{ name: 'CaretUpSUI', component: <HIGIcons.CaretUpSUI /> },
	{ name: 'CaretUpXsUI', component: <HIGIcons.CaretUpXsUI /> },
	{ name: 'CheckmarkSUI', component: <HIGIcons.CheckmarkSUI /> },
	{ name: 'CheckmarkXsUI', component: <HIGIcons.CheckmarkXsUI /> },
	{ name: 'CloseLUI', component: <HIGIcons.CloseLUI /> },
	{ name: 'CloseMUI', component: <HIGIcons.CloseMUI /> },
	{ name: 'CloseSUI', component: <HIGIcons.CloseSUI /> },
	{ name: 'CloseXsUI', component: <HIGIcons.CloseXsUI /> },
	{ name: 'HamburgerCloseUI', component: <HIGIcons.HamburgerCloseUI /> },
	{ name: 'HamburgerDefaultUI', component: <HIGIcons.HamburgerDefaultUI /> },
	{ name: 'OperatorMinusSUI', component: <HIGIcons.OperatorMinusSUI /> },
	{ name: 'OperatorMinusXsUI', component: <HIGIcons.OperatorMinusXsUI /> },
	{ name: 'OperatorPlusSUI', component: <HIGIcons.OperatorPlusSUI /> },
	{ name: 'OperatorPlusXsUI', component: <HIGIcons.OperatorPlusXsUI /> },
];


function App() {
	let renderItems = iconSet.map(iconData => <tr><td>{iconData.name}</td><td>{iconData.component}</td></tr>);
	return (
		<table>
			<tr><td>Number of icons</td><td>{iconSet.length}</td></tr>
			{renderItems}
		</table>
	);
}


export default App;
