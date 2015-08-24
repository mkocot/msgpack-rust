initSidebarItems({"enum":[["DecodeStringError",""],["FixedValueReadError","Represents an error that can occur when attempting to read a MessagePack'ed single-byte value from the reader."],["MarkerReadError","Represents an error that can occur when attempting to read a MessagePack marker from the reader."],["ReadError","Represents an error that can occur when attempting to read bytes from the reader."],["ValueReadError","Represents an error that can occur when attempting to read a MessagePack'ed complex value from the reader."]],"fn":[["read_array_size","Attempts to read up to 5 bytes from the given reader and to decode them as a big-endian u32 array size."],["read_bin_borrow","Attempts to read some bytes from the given slice until a complete Binary message is decoded, returning a borrowed slice with the data."],["read_bin_len","Attempts to read up to 5 bytes from the given reader and to decode them as Binary array length."],["read_bool","Attempts to read a single byte from the given reader and to decode it as a boolean value."],["read_ext_meta","Unstable: docs, errors"],["read_f32","Attempts to read exactly 5 bytes from the given reader and to decode them as `f32` value."],["read_f64","Attempts to read exactly 9 bytes from the given reader and to decode them as `f64` value."],["read_fixext1","Attempts to read exactly 3 bytes from the given reader and interpret them as a fixext1 type with data attached."],["read_fixext16","Attempts to read exactly 18 bytes from the given reader and interpret them as a fixext16 type with data attached."],["read_fixext2","Attempts to read exactly 4 bytes from the given reader and interpret them as a fixext2 type with data attached."],["read_fixext4","Attempts to read exactly 6 bytes from the given reader and interpret them as a fixext4 type with data attached."],["read_fixext8","Attempts to read exactly 10 bytes from the given reader and interpret them as a fixext8 type with data attached."],["read_full","Copies the contents of a reader into a buffer until fully filled."],["read_i16","Attempts to read exactly 3 bytes from the given reader and to decode them as `i16` value."],["read_i16_fit",""],["read_i16_loosely","Attempts to read up to 3 bytes from the given reader and to decode them as `i16` value."],["read_i32","Attempts to read exactly 5 bytes from the given reader and to decode them as `i32` value."],["read_i32_fit",""],["read_i32_loosely","Attempts to read up to 5 bytes from the given reader and to decode them as `i32` value."],["read_i64","Attempts to read exactly 9 bytes from the given reader and to decode them as `i64` value."],["read_i64_fit",""],["read_i64_loosely","Attempts to read up to 9 bytes from the given reader and to decode them as `i64` value."],["read_i8","Attempts to read exactly 2 bytes from the given reader and to decode them as `i8` value."],["read_i8_fit",""],["read_i8_loosely","Attempts to read up to 2 bytes from the given reader and to decode them as `i8` value."],["read_map_size","Attempts to read up to 5 bytes from the given reader and to decode them as a big-endian u32 map size."],["read_marker","Attempts to read a single byte from the given reader and decodes it as a MessagePack marker."],["read_nfix","Attempts to read a single byte from the given reader and to decode it as a negative fixnum value."],["read_nil","Attempts to read a single byte from the given reader and to decode it as a nil value."],["read_numeric_data",""],["read_pfix","Attempts to read a single byte from the given reader and to decode it as a positive fixnum value."],["read_str","Attempts to read a string data from the given reader and copy it to the buffer provided."],["read_str_data",""],["read_str_len","Attempts to read up to 9 bytes from the given reader and to decode them as a string `u32` size value."],["read_str_ref","Attempts to read and decode a string value from the reader, returning a borrowed slice from it."],["read_u16","Attempts to read exactly 3 bytes from the given reader and to decode them as `u16` value."],["read_u16_fit",""],["read_u16_loosely","Attempts to read up to 3 bytes from the given reader and to decode them as `u16` value."],["read_u32","Attempts to read exactly 5 bytes from the given reader and to decode them as `u32` value."],["read_u32_fit",""],["read_u32_loosely","Attempts to read up to 5 bytes from the given reader and to decode them as `u32` value."],["read_u64","Attempts to read exactly 9 bytes from the given reader and to decode them as `u64` value."],["read_u64_fit",""],["read_u64_loosely","Attempts to read up to 9 bytes from the given reader and to decode them as `u64` value."],["read_u8","Attempts to read exactly 2 bytes from the given reader and to decode them as `u8` value."],["read_u8_fit",""],["read_u8_loosely","Attempts to read up to 2 bytes from the given reader and to decode them as `u8` value."]],"mod":[["value",""],["value_ref","This module is UNSTABLE, the reason is - recently added."]],"struct":[["ExtMeta",""]],"trait":[["BigEndianRead",""]]});