(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableBinaryArray.html\" title=\"struct arrow2::array::MutableBinaryArray\">MutableBinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::mutable::MutableBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableBooleanArray.html\" title=\"struct arrow2::array::MutableBooleanArray\">MutableBooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::mutable::MutableBooleanArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>, M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableDictionaryArray.html\" title=\"struct arrow2::array::MutableDictionaryArray\">MutableDictionaryArray</a>&lt;K, M&gt;","synthetic":false,"types":["arrow2::array::dictionary::mutable::MutableDictionaryArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>, M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableListArray.html\" title=\"struct arrow2::array::MutableListArray\">MutableListArray</a>&lt;O, M&gt;","synthetic":false,"types":["arrow2::array::list::mutable::MutableListArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::mutable::MutablePrimitiveArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableUtf8Array.html\" title=\"struct arrow2::array::MutableUtf8Array\">MutableUtf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::mutable::MutableUtf8Array"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableNull.html\" title=\"struct arrow2::array::growable::GrowableNull\">GrowableNull</a>","synthetic":false,"types":["arrow2::array::growable::null::GrowableNull"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>","synthetic":false,"types":["arrow2::bitmap::immutable::Bitmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>","synthetic":false,"types":["arrow2::bitmap::mutable::MutableBitmap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.NullScalar.html\" title=\"struct arrow2::scalar::NullScalar\">NullScalar</a>","synthetic":false,"types":["arrow2::scalar::null::NullScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u8x64.html\" title=\"struct arrow2::types::simd::u8x64\">u8x64</a>","synthetic":false,"types":["arrow2::types::simd::native::u8x64"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u16x32.html\" title=\"struct arrow2::types::simd::u16x32\">u16x32</a>","synthetic":false,"types":["arrow2::types::simd::native::u16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u32x16.html\" title=\"struct arrow2::types::simd::u32x16\">u32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::u32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u64x8.html\" title=\"struct arrow2::types::simd::u64x8\">u64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::u64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i8x64.html\" title=\"struct arrow2::types::simd::i8x64\">i8x64</a>","synthetic":false,"types":["arrow2::types::simd::native::i8x64"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i16x32.html\" title=\"struct arrow2::types::simd::i16x32\">i16x32</a>","synthetic":false,"types":["arrow2::types::simd::native::i16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i32x16.html\" title=\"struct arrow2::types::simd::i32x16\">i32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::i32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i64x8.html\" title=\"struct arrow2::types::simd::i64x8\">i64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::i64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f32x16.html\" title=\"struct arrow2::types::simd::f32x16\">f32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::f32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f64x8.html\" title=\"struct arrow2::types::simd::f64x8\">f64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::f64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f16x32.html\" title=\"struct arrow2::types::simd::f16x32\">f16x32</a>","synthetic":false,"types":["arrow2::types::simd::f16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.days_msx8.html\" title=\"struct arrow2::types::simd::days_msx8\">days_msx8</a>","synthetic":false,"types":["arrow2::types::simd::days_msx8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.months_days_nsx8.html\" title=\"struct arrow2::types::simd::months_days_nsx8\">months_days_nsx8</a>","synthetic":false,"types":["arrow2::types::simd::months_days_nsx8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i128x8.html\" title=\"struct arrow2::types::simd::i128x8\">i128x8</a>","synthetic":false,"types":["arrow2::types::simd::i128x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/struct.days_ms.html\" title=\"struct arrow2::types::days_ms\">days_ms</a>","synthetic":false,"types":["arrow2::types::native::days_ms"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/struct.months_days_ns.html\" title=\"struct arrow2::types::months_days_ns\">months_days_ns</a>","synthetic":false,"types":["arrow2::types::native::months_days_ns"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/types/struct.f16.html\" title=\"struct arrow2::types::f16\">f16</a>","synthetic":false,"types":["arrow2::types::native::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/compute/cast/struct.CastOptions.html\" title=\"struct arrow2::compute::cast::CastOptions\">CastOptions</a>","synthetic":false,"types":["arrow2::compute::cast::CastOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/compute/sort/struct.SortOptions.html\" title=\"struct arrow2::compute::sort::SortOptions\">SortOptions</a>","synthetic":false,"types":["arrow2::compute::sort::SortOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/io/csv/write/struct.SerializeOptions.html\" title=\"struct arrow2::io::csv::write::SerializeOptions\">SerializeOptions</a>","synthetic":false,"types":["arrow2::io::csv::write::serialize::SerializeOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/stream_async/struct.WriteOptions.html\" title=\"struct arrow2::io::ipc::write::stream_async::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::WriteOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcField.html\" title=\"struct arrow2::io::ipc::IpcField\">IpcField</a>","synthetic":false,"types":["arrow2::io::ipc::IpcField"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.CompressedBlock.html\" title=\"struct arrow2::io::avro::CompressedBlock\">CompressedBlock</a>","synthetic":false,"types":["arrow2::io::avro::CompressedBlock"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.Block.html\" title=\"struct arrow2::io::avro::Block\">Block</a>","synthetic":false,"types":["arrow2::io::avro::Block"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Schema.html\" title=\"struct arrow2::datatypes::Schema\">Schema</a>","synthetic":false,"types":["arrow2::datatypes::schema::Schema"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()