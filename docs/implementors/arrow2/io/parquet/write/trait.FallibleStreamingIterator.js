(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"arrow2/io/json/write/trait.JsonFormat.html\" title=\"trait arrow2::io::json::write::JsonFormat\">JsonFormat</a>, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"arrow2/error/type.Result.html\" title=\"type arrow2::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"arrow2/record_batch/struct.RecordBatch.html\" title=\"struct arrow2::record_batch::RecordBatch\">RecordBatch</a>&gt;&gt;&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/json/write/struct.Serializer.html\" title=\"struct arrow2::io::json::write::Serializer\">Serializer</a>&lt;F, I&gt;","synthetic":false,"types":["arrow2::io::json::write::Serializer"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/avro/read/struct.BlockStreamIterator.html\" title=\"struct arrow2::io::avro::read::BlockStreamIterator\">BlockStreamIterator</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::avro::read::block::BlockStreamIterator"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/avro/read/struct.Decompressor.html\" title=\"struct arrow2::io::avro::read::Decompressor\">Decompressor</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::avro::read::decompress::Decompressor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()