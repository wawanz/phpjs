function xmlwriter_end_attribute (xmlwriter) {
	// http://kevin.vanzonneveld.net
	// +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: var xmlwriter = xmlwriter_open_memory();
	// *     example 1: xmlwriter_end_attribute(xmlwriter);
	// *     returns 1: true

    return xmlwriter.endAttribute();
}